import { BadRequestException, Injectable } from '@nestjs/common';
import {budget} from './schema/budget.schema'
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {createBudgetDTO} from './dto/createBudget'
import {deleteBudgetDTO} from './dto/deleteBudget'
import { Query } from 'express-serve-static-core';
import { wallets} from '../wallets/schema/wallets-schema'

@Injectable()
export class BudgetService {
    constructor(
        @InjectModel(budget.name)
        private budgetModels: mongoose.Model<budget>,
        @InjectModel(wallets.name)
        private walletsModel: mongoose.Model<wallets>,
    ){}

    async create(budget: budget){
        const name = budget.name
        const wallet_id = budget.wallet_id
        const object = await this.budgetModels.findOne({name})
        if (object)
            throw new BadRequestException('name already exists')
        const wallets = await this.walletsModel.findOne({_id: wallet_id})
        if (!wallets)
            throw new BadRequestException('invalid wallets id')
        const res = await this.budgetModels.create(budget)
        return res
    }

    async delete(query: Query){
        const { name} = query
        const object = await this.budgetModels.findOne({name})
        if (object)
            {
                const res = await this.budgetModels.deleteOne({name})
                return res
            }   
        throw new BadRequestException("invalid name")
    }

}
