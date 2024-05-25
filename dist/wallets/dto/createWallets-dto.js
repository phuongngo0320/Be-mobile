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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWalletsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class createWalletsDto {
}
exports.createWalletsDto = createWalletsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'wallets name ',
        example: 'vi shopping'
    }),
    __metadata("design:type", String)
], createWalletsDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of user',
        example: '66237fef97705968270a6dab'
    }),
    __metadata("design:type", String)
], createWalletsDto.prototype, "user_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'type',
        example: 'shopping'
    }),
    __metadata("design:type", String)
], createWalletsDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The amount of money ',
        example: '5000'
    }),
    __metadata("design:type", Number)
], createWalletsDto.prototype, "amount", void 0);
//# sourceMappingURL=createWallets-dto.js.map