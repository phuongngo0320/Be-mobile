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
exports.createTransactionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class createTransactionDTO {
}
exports.createTransactionDTO = createTransactionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of wallet',
        example: '662373683f8efccec560c2c0'
    }),
    __metadata("design:type", String)
], createTransactionDTO.prototype, "wallet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'category of budget ',
        example: 'clothes shopping'
    }),
    __metadata("design:type", String)
], createTransactionDTO.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'amount of money ',
        example: '25000'
    }),
    __metadata("design:type", Number)
], createTransactionDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true
    }),
    __metadata("design:type", Boolean)
], createTransactionDTO.prototype, "is_pay", void 0);
//# sourceMappingURL=createTransactionDTO.js.map