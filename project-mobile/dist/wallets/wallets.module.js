"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModule = void 0;
const common_1 = require("@nestjs/common");
const wallets_controller_1 = require("./wallets.controller");
const wallets_service_1 = require("./wallets.service");
const mongoose_1 = require("@nestjs/mongoose");
const wallets_schema_1 = require("./schema/wallets-schema");
const users_schema_1 = require("../users/schema/users-schema");
let WalletModule = class WalletModule {
};
exports.WalletModule = WalletModule;
exports.WalletModule = WalletModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'wallets', schema: wallets_schema_1.walletsSchema }, { name: 'Users', schema: users_schema_1.usersSchema }])],
        controllers: [wallets_controller_1.WalletsController],
        providers: [wallets_service_1.WalletService]
    })
], WalletModule);
//# sourceMappingURL=wallets.module.js.map