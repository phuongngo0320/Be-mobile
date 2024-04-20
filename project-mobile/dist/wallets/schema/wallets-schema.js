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
exports.walletsSchema = exports.wallets = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let wallets = class wallets {
};
exports.wallets = wallets;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], wallets.prototype, "wallets_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], wallets.prototype, "budget", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], wallets.prototype, "spend", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], wallets.prototype, "left", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], wallets.prototype, "email", void 0);
exports.wallets = wallets = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: false,
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    })
], wallets);
exports.walletsSchema = mongoose_1.SchemaFactory.createForClass(wallets);
//# sourceMappingURL=wallets-schema.js.map