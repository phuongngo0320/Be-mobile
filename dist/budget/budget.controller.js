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
exports.BudgetController = void 0;
const budget_service_1 = require("./budget.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const createBudget_1 = require("./dto/createBudget");
const deleteBudget_1 = require("./dto/deleteBudget");
const findByIdDTO_1 = require("./dto/findByIdDTO");
const findInRange_1 = require("./dto/findInRange");
const updateBudget_1 = require("./dto/updateBudget");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    async createBudget(budget) {
        return this.budgetService.create(budget);
    }
    async deleteBudget(query) {
        return this.budgetService.delete(query);
    }
    async findById(query) {
        return this.budgetService.findByID(query);
    }
    async findInRange(query) {
        return this.budgetService.findInRange(query);
    }
    async Update(query) {
        return this.budgetService.Update(query);
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create Budget' }),
    (0, swagger_1.ApiTags)('budgets'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createBudget_1.createBudgetDTO]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "createBudget", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete Budget' }),
    (0, swagger_1.ApiTags)('budgets'),
    (0, common_1.Delete)(),
    (0, swagger_1.ApiQuery)({ type: deleteBudget_1.deleteBudgetDTO }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "deleteBudget", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find Budget by budget_id' }),
    (0, swagger_1.ApiTags)('budgets'),
    (0, common_1.Get)('ids'),
    (0, swagger_1.ApiQuery)({ type: findByIdDTO_1.findByIdDTO }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find all Budget by wallets_id in range' }),
    (0, swagger_1.ApiTags)('budgets'),
    (0, common_1.Get)('ranges'),
    (0, swagger_1.ApiQuery)({ type: findInRange_1.findInRangeDTO }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "findInRange", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update Budget ' }),
    (0, swagger_1.ApiTags)('budgets'),
    (0, common_1.Patch)(),
    (0, swagger_1.ApiQuery)({ type: updateBudget_1.updateBudgetDtO }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "Update", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)('budgets'),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map