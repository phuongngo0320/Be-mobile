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
exports.getAllistoriesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class getAllistoriesDTO {
}
exports.getAllistoriesDTO = getAllistoriesDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user_ID',
    }),
    __metadata("design:type", String)
], getAllistoriesDTO.prototype, "user_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'start_date',
    }),
    __metadata("design:type", String)
], getAllistoriesDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'end_date',
    }),
    __metadata("design:type", String)
], getAllistoriesDTO.prototype, "end_date", void 0);
//# sourceMappingURL=getallhistoriesDTO.js.map