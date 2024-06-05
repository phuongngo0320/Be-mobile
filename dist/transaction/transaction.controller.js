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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const createTransactionDTO_1 = require("./dto/createTransactionDTO");
const deleteTransactionDTO_1 = require("./dto/deleteTransactionDTO");
const gethistoriesDTO_1 = require("./dto/gethistoriesDTO");
const getAllHistoriesDTO_1 = require("./dto/getAllHistoriesDTO");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async createBudget(transactions) {
        return this.transactionService.create(transactions);
    }
    async deleteTransaction(query) {
        return this.transactionService.delete(query);
    }
    async getHistories(query) {
        return this.transactionService.histories(query);
    }
    async getAllHistories(query) {
        return this.transactionService.Allhistories(query);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create transactions' }),
    (0, swagger_1.ApiTags)('transactions'),
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTransactionDTO_1.createTransactionDTO]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "createBudget", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete transactions' }),
    (0, swagger_1.ApiTags)('transactions'),
    (0, swagger_1.ApiQuery)({ type: deleteTransactionDTO_1.deleteTransactionDTO }),
    (0, common_2.Delete)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "deleteTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'transaction history by wallet_ID' }),
    (0, swagger_1.ApiTags)('transactions'),
    (0, swagger_1.ApiQuery)({ type: gethistoriesDTO_1.getHistoriesDTO }),
    (0, common_2.Get)('histories'),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getHistories", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'transaction history by user_ID' }),
    (0, swagger_1.ApiTags)('transactions'),
    (0, swagger_1.ApiQuery)({ type: getAllHistoriesDTO_1.getAllistoriesDTO }),
    (0, common_2.Get)('histories/all'),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAllHistories", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map