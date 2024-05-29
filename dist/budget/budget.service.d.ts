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
import { budget } from './schema/budget.schema';
import mongoose from 'mongoose';
import { createBudgetDTO } from './dto/createBudget';
import { Query } from 'express-serve-static-core';
import { wallets } from '../wallets/schema/wallets-schema';
import { transactions } from '../transaction/schema/transaction.schema';
export declare class BudgetService {
    private budgetModels;
    private walletsModel;
    private transactionsModel;
    constructor(budgetModels: mongoose.Model<budget>, walletsModel: mongoose.Model<wallets>, transactionsModel: mongoose.Model<transactions>);
    create(budget: createBudgetDTO): Promise<mongoose.Document<unknown, {}, budget> & budget & {
        _id: mongoose.Types.ObjectId;
    }>;
    delete(query: Query): Promise<mongoose.mongo.DeleteResult>;
    findByID(query: Query): Promise<mongoose.Document<unknown, {}, budget> & budget & {
        _id: mongoose.Types.ObjectId;
    }>;
    findInRange(query: Query): Promise<(mongoose.Document<unknown, {}, budget> & budget & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    Update(query: Query): Promise<mongoose.Document<unknown, {}, budget> & budget & {
        _id: mongoose.Types.ObjectId;
    }>;
}
