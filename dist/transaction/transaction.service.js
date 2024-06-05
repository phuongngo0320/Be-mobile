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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const transaction_schema_1 = require("./schema/transaction.schema");
const mongoose = require("mongoose");
const wallets_schema_1 = require("../wallets/schema/wallets-schema");
const budget_schema_1 = require("../budget/schema/budget.schema");
const date_fns_1 = require("date-fns");
let TransactionService = class TransactionService {
    constructor(transactionsModel, walletsModel, budgetModels) {
        this.transactionsModel = transactionsModel;
        this.walletsModel = walletsModel;
        this.budgetModels = budgetModels;
    }
    async create(transactions) {
        const wallet_id = transactions.wallet_id;
        const wallets = await this.walletsModel.findOne({ _id: wallet_id });
        if (!wallets)
            throw new common_1.BadRequestException('invalid wallet_id');
        const category = transactions.category;
        const budget = await this.budgetModels.findOne({ wallet_id, category });
        const now = new Date();
        const date = now
            .toLocaleString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
            .replace(/\//g, '/');
        const [month, day, year] = date.split('/');
        const formattedDate = `${day}/${month}/${year}`;
        const object = {
            wallet_id: transactions.wallet_id,
            category: transactions.category,
            amount: transactions.amount,
            is_pay: transactions.is_pay,
            created_at: formattedDate,
            note_info: transactions.note_info
        };
        if (transactions.is_pay) {
            const temp = Number(wallets.amount) - Number(transactions.amount);
            if (temp < 0)
                throw new common_1.BadRequestException('not enough money in wallets to make transaction');
            if (budget) {
                const t1 = budget.amount;
                const t2 = transactions.amount;
                const targetDate = (0, date_fns_1.parse)(formattedDate, 'dd/MM/yyyy', new Date());
                const startDate = (0, date_fns_1.parse)(budget.start_date, 'dd/MM/yyyy', new Date());
                const endDate = (0, date_fns_1.parse)(String(budget.end_date), 'dd/MM/yyyy', new Date());
                if ((0, date_fns_1.isWithinInterval)(targetDate, { start: startDate, end: endDate })) {
                    budget.amount = Number(t1) - Number(t2);
                    await budget.save();
                }
            }
            wallets.amount = temp;
            await wallets.save();
        }
        else {
            const temp = Number(wallets.amount) + Number(transactions.amount);
            wallets.amount = temp;
            await wallets.save();
        }
        const res = await this.transactionsModel.create(object);
        return res;
    }
    async histories(query) {
        return await this.transactionsModel.find(query);
    }
    async Allhistories(query) {
        const { user_ID, start_date, end_date } = query;
        const all_wallets = await this.walletsModel.find({ user_ID: user_ID });
        const promises = all_wallets.map(async (wallets) => {
            const object = await this.transactionsModel.find({ wallet_id: wallets._id });
            return object;
        });
        const results = await Promise.all(promises);
        const concatenatedValues = [].concat(...results);
        if (start_date == null && end_date == null) {
            return concatenatedValues;
        }
        const startDate = (0, date_fns_1.parse)(String(start_date), 'dd/MM/yyyy', new Date());
        const endDate = (0, date_fns_1.parse)(String(end_date), 'dd/MM/yyyy', new Date());
        const filteredValues = concatenatedValues.filter((element) => (0, date_fns_1.isWithinInterval)((0, date_fns_1.parse)(element.created_at, 'dd/MM/yyyy', new Date()), { start: startDate, end: endDate }) === true);
        return filteredValues;
    }
    async delete(transaction) {
        const { _id } = transaction;
        const object = await this.transactionsModel.findOne({ _id });
        if (!object)
            throw new common_1.BadRequestException("invalid transaction_id");
        const wallet = await this.walletsModel.findOne({ _id: object.wallet_id });
        const budget = await this.budgetModels.findOne({ wallet_id: object.wallet_id, category: object.category });
        if (object.is_pay) {
            if (budget && budget.end_date) {
                budget.amount = Number(object.amount) + Number(budget.amount);
                await budget.save();
            }
            wallet.amount = Number(object.amount) + Number(wallet.amount);
        }
        else {
            if (budget) {
                budget.amount = Number(object.amount) - Number(budget.amount);
                await budget.save();
            }
            const temp = Number(object.amount) - Number(wallet.amount);
            if (temp < 0)
                throw new common_1.BadRequestException("amount of money in wallet < 0 ");
            wallet.amount = temp;
        }
        await wallet.save();
        return await this.transactionsModel.findByIdAndDelete(_id);
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transaction_schema_1.transactions.name)),
    __param(1, (0, mongoose_1.InjectModel)(wallets_schema_1.wallets.name)),
    __param(2, (0, mongoose_1.InjectModel)(budget_schema_1.budget.name)),
    __metadata("design:paramtypes", [mongoose.Model, mongoose.Model, mongoose.Model])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map