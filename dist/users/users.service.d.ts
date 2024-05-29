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
/// <reference types="mongoose/types/inferschematype" />
import * as mongoose from 'mongoose';
import { Users } from "./schema/users-schema";
import { Query } from 'express-serve-static-core';
import { change_password } from './dto/change_password-dto';
import { createUsersDto } from './dto/create-users-dto';
import { loginDTO } from './dto/login-dto';
export declare class UsersService {
    private usersmodel;
    constructor(usersmodel: mongoose.Model<Users>);
    GetAllUsers(query: Query): Promise<Users[]>;
    create(users: Users): Promise<mongoose.Document<unknown, {}, Users> & Users & {
        _id: mongoose.Types.ObjectId;
    }>;
    login(query: loginDTO): Promise<mongoose.Document<unknown, {}, Users> & Users & {
        _id: mongoose.Types.ObjectId;
    }>;
    changepassword(change_password: change_password): Promise<{
        message: String;
    }>;
    deleteUsers(query: createUsersDto): Promise<{
        message: string;
    }>;
}
