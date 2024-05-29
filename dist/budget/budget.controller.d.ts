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
import { BudgetService } from './budget.service';
import { createBudgetDTO } from './dto/createBudget';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class BudgetController {
    private budgetService;
    constructor(budgetService: BudgetService);
    createBudget(budget: createBudgetDTO): Promise<import("mongoose").Document<unknown, {}, import("./schema/budget.schema").budget> & import("./schema/budget.schema").budget & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteBudget(query: ExpressQuery): Promise<import("mongodb").DeleteResult>;
    findById(query: ExpressQuery): Promise<import("mongoose").Document<unknown, {}, import("./schema/budget.schema").budget> & import("./schema/budget.schema").budget & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findInRange(query: ExpressQuery): Promise<(import("mongoose").Document<unknown, {}, import("./schema/budget.schema").budget> & import("./schema/budget.schema").budget & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    Update(query: ExpressQuery): Promise<import("mongoose").Document<unknown, {}, import("./schema/budget.schema").budget> & import("./schema/budget.schema").budget & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
