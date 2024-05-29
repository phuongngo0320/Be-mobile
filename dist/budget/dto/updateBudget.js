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
exports.updateBudgetDtO = void 0;
const swagger_1 = require("@nestjs/swagger");
class updateBudgetDtO {
}
exports.updateBudgetDtO = updateBudgetDtO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'budget id'
    }),
    __metadata("design:type", String)
], updateBudgetDtO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'wallet_id'
    }),
    __metadata("design:type", String)
], updateBudgetDtO.prototype, "wallet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'amount'
    }),
    __metadata("design:type", Number)
], updateBudgetDtO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'category'
    }),
    __metadata("design:type", String)
], updateBudgetDtO.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'start_date'
    }),
    __metadata("design:type", String)
], updateBudgetDtO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'end_date'
    }),
    __metadata("design:type", String)
], updateBudgetDtO.prototype, "end_date", void 0);
//# sourceMappingURL=updateBudget.js.map