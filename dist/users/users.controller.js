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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_users_dto_1 = require("./dto/create-users-dto");
const change_password_dto_1 = require("./dto/change_password-dto");
const get_user_dto_1 = require("./dto/get-user-dto");
const login_dto_1 = require("./dto/login-dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUsers(query) {
        return await this.usersService.GetAllUsers(query);
    }
    async createUser(users) {
        return this.usersService.create(users);
    }
    async changepassword(change) {
        return this.usersService.changepassword(change);
    }
    async deleteUsers(query) {
        return this.usersService.deleteUsers(query);
    }
    async login(query) {
        return await this.usersService.login(query);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get a user by name or mail, let empty both will get all users' }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: get_user_dto_1.getUsersDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a user' }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.createUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'change password' }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Patch)('password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.change_password]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changepassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete users ' }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Delete)(),
    (0, swagger_1.ApiQuery)({ type: create_users_dto_1.createUsersDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'login' }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('login'),
    (0, swagger_1.ApiQuery)({ type: login_dto_1.loginDTO }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map