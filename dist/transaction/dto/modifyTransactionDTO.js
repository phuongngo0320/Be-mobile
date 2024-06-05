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
exports.modifyTransactionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class modifyTransactionDTO {
}
exports.modifyTransactionDTO = modifyTransactionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of tranaction',
    }),
    __metadata("design:type", String)
], modifyTransactionDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of wallet',
        required: false
    }),
    __metadata("design:type", String)
], modifyTransactionDTO.prototype, "wallet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'category of budget ',
        required: false
    }),
    __metadata("design:type", String)
], modifyTransactionDTO.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'amount of money ',
        required: false
    }),
    __metadata("design:type", Number)
], modifyTransactionDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        required: false
    }),
    __metadata("design:type", Boolean)
], modifyTransactionDTO.prototype, "is_pay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'note for transaction ',
        required: false
    }),
    __metadata("design:type", String)
], modifyTransactionDTO.prototype, "note_info", void 0);
//# sourceMappingURL=modifyTransactionDTO.js.map