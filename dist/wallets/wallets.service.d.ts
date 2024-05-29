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
import { wallets } from './schema/wallets-schema';
import { createWalletsDto } from './dto/createWallets-dto';
import { deleteWallets } from './dto/delete_wallets-dto';
import { money_wallets } from './dto/money_wallets-dto';
import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { Users } from '../users/schema/users-schema';
export declare class WalletService {
    private walletsModel;
    private usersModel;
    constructor(walletsModel: mongoose.Model<wallets>, usersModel: mongoose.Model<Users>);
    findwallets(query: Query): Promise<(mongoose.Document<unknown, {}, wallets> & wallets & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    deposit(query: money_wallets): Promise<string>;
    withdraw(query: money_wallets): Promise<string>;
    createWallets(wallets: createWalletsDto): Promise<mongoose.Document<unknown, {}, wallets> & wallets & {
        _id: mongoose.Types.ObjectId;
    }>;
    deleteWallets(query: deleteWallets): Promise<mongoose.Document<unknown, {}, wallets> & wallets & {
        _id: mongoose.Types.ObjectId;
    }>;
    findById(query: Query): Promise<mongoose.Document<unknown, {}, wallets> & wallets & {
        _id: mongoose.Types.ObjectId;
    }>;
    updateWallets(query: Query): Promise<mongoose.Document<unknown, {}, wallets> & wallets & {
        _id: mongoose.Types.ObjectId;
    }>;
}
