"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const budget_schema_1 = require("./schema/budget.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const wallets_schema_1 = require("../wallets/schema/wallets-schema");
const transaction_schema_1 = require("../transaction/schema/transaction.schema");
const date_fns_1 = require("date-fns");
let BudgetService = class BudgetService {
    constructor(budgetModels, walletsModel, transactionsModel) {
        this.budgetModels = budgetModels;
        this.walletsModel = walletsModel;
        this.transactionsModel = transactionsModel;
    }
    async create(budget) {
        const category = budget.category;
        const wallet_id = budget.wallet_id;
        const wallets = await this.walletsModel.findOne({ _id: wallet_id });
        if (!wallets)
            throw new common_1.BadRequestException('invalid wallets id');
        const today = new Date();
        const object = await this.budgetModels.find({ category, wallet_id: wallet_id, $expr: {
                $gt: [
                    {
                        $dateFromString: {
                            dateString: '$end_date',
                            format: '%d/%m/%Y'
                        }
                    },
                    today
                ]
            } });
        if (object.length > 0)
            throw new common_1.BadRequestException('category already exists');
        if (Number(wallets.amount) < Number(budget.amount))
            throw new common_1.BadRequestException('not enough money in wallet');
        const budget_full = {
            category: budget.category,
            name: budget.name,
            wallet_id: budget.wallet_id,
            amount: budget.amount,
            initial_amount: budget.amount,
            start_date: budget.start_date,
            end_date: budget.end_date,
        };
        const res = await this.budgetModels.create(budget_full);
        return res;
    }
    async delete(query) {
        const object = await this.budgetModels.findOne(query);
        if (object) {
            const res = await this.budgetModels.deleteOne(query);
            return res;
        }
        throw new common_1.BadRequestException("invalid name");
    }
    async findByID(query) {
        try {
            return await this.budgetModels.findOne(query);
        }
        catch (error) {
            throw error;
        }
    }
    async findInRange(query) {
        return await this.budgetModels.find(query);
    }
    async Update(query) {
        const { _id, ...remain } = query;
        const object = await this.budgetModels.findOne({ _id: _id });
        if (object) {
            const { wallet_id, category, start_date, end_date, amount } = remain;
            const wallet = await this.walletsModel.findOne({ _id: wallet_id });
            if (!wallet)
                throw new common_1.BadRequestException("invalid wallet_id");
            if (Number(wallet.amount) < Number(amount))
                throw new common_1.BadRequestException("not enough money in wallet");
            let o1 = await this.budgetModels.findByIdAndUpdate(_id, remain);
            o1.amount = Number(amount);
            o1.initial_amount = Number(amount);
            await o1.save();
            let o2 = await this.transactionsModel.find({ wallet_id: wallet_id, category: category });
            const startDate = (0, date_fns_1.parse)(String(start_date), 'dd/MM/yyyy', new Date());
            const endDate = (0, date_fns_1.parse)(String(end_date), 'dd/MM/yyyy', new Date());
            const sum = o2.reduce((accumulator, currentObject) => {
                if ((0, date_fns_1.isWithinInterval)((0, date_fns_1.parse)(currentObject.created_at, 'dd/MM/yyyy', new Date()), { start: startDate, end: endDate })) {
                    return accumulator + Number(currentObject.amount);
                }
                return Number(accumulator);
            }, 0);
            o1.amount = Number(o1.amount) - sum;
            await o1.save();
            return o1;
        }
        else
            throw new common_1.BadRequestException("invalid budget id");
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(budget_schema_1.budget.name)),
    __param(1, (0, mongoose_2.InjectModel)(wallets_schema_1.wallets.name)),
    __param(2, (0, mongoose_2.InjectModel)(transaction_schema_1.transactions.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model, mongoose_1.default.Model, mongoose_1.default.Model])
], BudgetService);
//# sourceMappingURL=budget.service.js.map