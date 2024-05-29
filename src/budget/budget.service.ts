import { BadRequestException, Injectable } from '@nestjs/common';
import {budget} from './schema/budget.schema'
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {createBudgetDTO} from './dto/createBudget'
import {findBudgetDTO} from './dto/findBudget'
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

    async create(budget: createBudgetDTO){
        const category = budget.category
        const wallet_id = budget.wallet_id
        const object = await this.budgetModels.findOne({category})
        if (object)
            throw new BadRequestException('category already exists')
        const wallets = await this.walletsModel.findOne({_id: wallet_id})
        if (!wallets)
            throw new BadRequestException('invalid wallets id')
        if (Number(wallets.amount) < Number(budget.amount))
            throw new BadRequestException('not enough money in wallet')
        const budget_full: budget = {
            category: budget.category,
            name : budget.name,
            wallet_id : budget.wallet_id,
            amount: budget.amount,
            initial_amount : budget.amount,
            start_date: budget.start_date,
            end_date: budget.end_date,
        }
        const res = await this.budgetModels.create(budget_full)
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


    async findByID(query: Query){
        return await this.budgetModels.findOne(query)
    }

    async findInRange(query: Query){
        return await this.budgetModels.find(query)
    }

    async updateWallets(query: Query){
        return await this.budgetModels.find(query)
    }

}
