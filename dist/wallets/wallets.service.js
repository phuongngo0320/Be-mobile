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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const wallets_schema_1 = require("./schema/wallets-schema");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("../users/schema/users-schema");
let WalletService = class WalletService {
    constructor(walletsModel, usersModel) {
        this.walletsModel = walletsModel;
        this.usersModel = usersModel;
    }
    async findwallets(query) {
        return await this.walletsModel.find(query);
    }
    async deposit(query) {
        const values = Object.values(query);
        const email = values[0];
        const deposit_money = values[1];
        const wallets_name = values[2];
        const users = await this.usersModel.findOne({ email });
        if (!users)
            throw new common_1.BadRequestException('invalid email');
        const wallet = await this.walletsModel.findOne({ email, wallets_name });
        if (!wallet)
            throw new common_1.BadRequestException('wallet is not created');
        wallet.amount = Number(parseInt(deposit_money) + parseInt(wallet.amount.toString()));
        const res = wallet.save();
        const message = 'Success';
        return message;
    }
    async withdraw(query) {
        const values = Object.values(query);
        const email = values[0];
        const wallets_name = values[2];
        const users = await this.usersModel.findOne({ email });
        if (!users)
            throw new common_1.BadRequestException('invalid email');
        const withdraw_money = values[1];
        const wallet = await this.walletsModel.findOne({ email, wallets_name });
        if (!wallet)
            throw new common_1.BadRequestException('wallet is not created');
        if (parseInt(withdraw_money) > parseInt(wallet.amount.toString()))
            throw new common_1.BadRequestException('not enough money to withdraw');
        wallet.amount = Number(parseInt(wallet.amount.toString()) - parseInt(withdraw_money));
        const res = await wallet.save();
        const message = 'Success';
        return message;
    }
    async createWallets(wallets) {
        const { name } = wallets;
        const { user_ID } = wallets;
        const users = await this.usersModel.findOne({ _id: user_ID });
        if (!users)
            throw new common_1.BadRequestException('invalid user_ID');
        const object = await this.walletsModel.findOne({ name, user_ID });
        if (object)
            throw new common_1.BadRequestException('wallets name already existed');
        var res = await this.walletsModel.create(wallets);
        return await res.save();
    }
    async deleteWallets(query) {
        return await this.walletsModel.findOneAndDelete(query);
    }
    async findById(query) {
        return await this.walletsModel.findOne(query);
    }
    async updateWallets(query) {
        const { _id, ...remaining } = query;
        return await this.walletsModel.findByIdAndUpdate(_id, remaining);
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(wallets_schema_1.wallets.name)),
    __param(1, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model])
], WalletService);
//# sourceMappingURL=wallets.service.js.map