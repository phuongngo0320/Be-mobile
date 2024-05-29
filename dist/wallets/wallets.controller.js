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
exports.WalletsController = void 0;
const common_1 = require("@nestjs/common");
const wallets_service_1 = require("./wallets.service");
const createWallets_dto_1 = require("./dto/createWallets-dto");
const get_wallets_dto_1 = require("./dto/get_wallets-dto");
const getWalletById_1 = require("./dto/getWalletById");
const delete_wallets_dto_1 = require("./dto/delete_wallets-dto");
const money_wallets_dto_1 = require("./dto/money_wallets-dto");
const updateWallet_dto_1 = require("./dto/updateWallet-dto");
const swagger_1 = require("@nestjs/swagger");
let WalletsController = class WalletsController {
    constructor(walletsService) {
        this.walletsService = walletsService;
    }
    async findwallets(query) {
        return this.walletsService.findwallets(query);
    }
    async createWallets(wallets) {
        return this.walletsService.createWallets(wallets);
    }
    async deleteWallets(query) {
        return this.walletsService.deleteWallets(query);
    }
    async Depositmoney(query) {
        return this.walletsService.deposit(query);
    }
    async withdrawmoney(query) {
        return this.walletsService.withdraw(query);
    }
    async findWalletsById(query) {
        return this.walletsService.findById(query);
    }
    async updateWallets(query) {
        return this.walletsService.updateWallets(query);
    }
};
exports.WalletsController = WalletsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get wallets by user ID' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Get)('byUsersId'),
    (0, swagger_1.ApiQuery)({ type: get_wallets_dto_1.getWalletsDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "findwallets", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a wallets' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWallets_dto_1.createWalletsDto]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "createWallets", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete a wallets' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_wallets_dto_1.deleteWallets]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "deleteWallets", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'deposit money to wallet' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Patch)('deposit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [money_wallets_dto_1.money_wallets]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "Depositmoney", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'withdraw money from wallet' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Patch)('withdraw'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [money_wallets_dto_1.money_wallets]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "withdrawmoney", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get wallets by wallet_ID' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Get)('byWalletsId'),
    (0, swagger_1.ApiQuery)({ type: getWalletById_1.getWalletsById }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "findWalletsById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update wallets' }),
    (0, swagger_1.ApiTags)('Wallets'),
    (0, common_1.Patch)(),
    (0, swagger_1.ApiQuery)({ type: updateWallet_dto_1.updateWallets }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "updateWallets", null);
exports.WalletsController = WalletsController = __decorate([
    (0, common_1.Controller)('wallets'),
    __metadata("design:paramtypes", [wallets_service_1.WalletService])
], WalletsController);
//# sourceMappingURL=wallets.controller.js.map