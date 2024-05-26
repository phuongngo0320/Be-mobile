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
let BudgetService = class BudgetService {
    constructor(budgetModels, walletsModel) {
        this.budgetModels = budgetModels;
        this.walletsModel = walletsModel;
    }
    async create(budget) {
        const category = budget.category;
        const wallet_id = budget.wallet_id;
        const object = await this.budgetModels.findOne({ category });
        if (object)
            throw new common_1.BadRequestException('category already exists');
        const wallets = await this.walletsModel.findOne({ _id: wallet_id });
        if (!wallets)
            throw new common_1.BadRequestException('invalid wallets id');
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
        const { name } = query;
        const object = await this.budgetModels.findOne({ name });
        if (object) {
            const res = await this.budgetModels.deleteOne({ name });
            return res;
        }
        throw new common_1.BadRequestException("invalid name");
    }
    async find(query) {
        return await this.budgetModels.find(query);
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(budget_schema_1.budget.name)),
    __param(1, (0, mongoose_2.InjectModel)(wallets_schema_1.wallets.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model, mongoose_1.default.Model])
], BudgetService);
//# sourceMappingURL=budget.service.js.map