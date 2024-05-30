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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const users_schema_1 = require("./schema/users-schema");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersmodel) {
        this.usersmodel = usersmodel;
    }
    async GetAllUsers(query) {
        const keys = Object.keys(query);
        if (keys.length == 0)
            return await this.usersmodel.find();
        return await this.usersmodel.find(query);
    }
    async create(users) {
        const email = users.email;
        const user = await this.usersmodel.findOne({ email });
        if (user)
            throw new common_1.BadRequestException('email already exists');
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(users.password, salt);
        users.password = hash;
        const res = await this.usersmodel.create(users);
        return res;
    }
    async login(query) {
        const { email, password } = query;
        const user = await this.usersmodel.findOne({ email });
        if (!user)
            throw new common_1.BadRequestException('not found email');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            throw new common_1.BadRequestException("wrong password");
        return user;
    }
    async changepassword(change_password) {
        const values = Object.values(change_password);
        const email = values[0];
        const oldpassword = values[1];
        const password = values[2];
        const user = await this.usersmodel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.password != oldpassword) {
            throw new common_1.BadRequestException('Invalid old password');
        }
        const query = { email: email };
        const update = { $set: { password: password } };
        await this.usersmodel.updateOne(query, update);
        const message = 'Success';
        return { message };
    }
    async deleteUsers(query) {
        const { email } = query;
        const user = await this.usersmodel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException('invalid email');
        }
        const { password } = query;
        if (password != user.password)
            throw new common_1.BadRequestException('Invalid password');
        await this.usersmodel.deleteOne(query);
        const message = 'Success';
        return { message };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map