/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UsersService } from './users.service';
import { createUsersDto } from './dto/create-users-dto';
import { change_password } from './dto/change_password-dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(query: ExpressQuery): Promise<import("./schema/users-schema").Users[]>;
    createUser(users: createUsersDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/users-schema").Users> & import("./schema/users-schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    changepassword(change: change_password): Promise<{
        message: String;
    }>;
    deleteUsers(query: any): Promise<{
        message: string;
    }>;
    login(query: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/users-schema").Users> & import("./schema/users-schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
