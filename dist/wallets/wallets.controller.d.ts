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
import { WalletService } from './wallets.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { createWalletsDto } from './dto/createWallets-dto';
import { deleteWallets } from './dto/delete_wallets-dto';
import { money_wallets } from './dto/money_wallets-dto';
export declare class WalletsController {
    private walletsService;
    constructor(walletsService: WalletService);
    findwallets(query: ExpressQuery): Promise<(import("mongoose").Document<unknown, {}, import("./schema/wallets-schema").wallets> & import("./schema/wallets-schema").wallets & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createWallets(wallets: createWalletsDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/wallets-schema").wallets> & import("./schema/wallets-schema").wallets & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteWallets(query: deleteWallets): Promise<import("mongoose").Document<unknown, {}, import("./schema/wallets-schema").wallets> & import("./schema/wallets-schema").wallets & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    Depositmoney(query: money_wallets): Promise<string>;
    withdrawmoney(query: money_wallets): Promise<string>;
    findWalletsById(query: ExpressQuery): Promise<import("mongoose").Document<unknown, {}, import("./schema/wallets-schema").wallets> & import("./schema/wallets-schema").wallets & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateWallets(query: ExpressQuery): Promise<import("mongoose").Document<unknown, {}, import("./schema/wallets-schema").wallets> & import("./schema/wallets-schema").wallets & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
