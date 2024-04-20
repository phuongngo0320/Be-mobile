import { UsersService } from './users.service';
import { createUsersDto } from './dto/create-users-dto';
import { change_password } from './dto/change_password-dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(query: ExpressQuery): Promise<import("./schema/users-schema").Users[]>;
    createUser(users: createUsersDto): Promise<import("./schema/users-schema").Users>;
    changepassword(change: change_password): Promise<{
        message: String;
    }>;
    deleteUsers(query: any): Promise<{
        message: string;
    }>;
}
