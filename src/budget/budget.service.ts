import { BadRequestException, Injectable } from '@nestjs/common';
import {budget} from './schema/budget.schema'
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {createBudgetDTO} from './dto/createBudget'
import { Query } from 'express-serve-static-core';
import { wallets} from '../wallets/schema/wallets-schema'
import {transactions} from '../transaction/schema/transaction.schema'
import { parse, isWithinInterval } from 'date-fns';

@Injectable()
export class BudgetService {
    constructor(
        @InjectModel(budget.name)
        private budgetModels: mongoose.Model<budget>,
        @InjectModel(wallets.name)
        private walletsModel: mongoose.Model<wallets>,
        @InjectModel(transactions.name)
        private transactionsModel: mongoose.Model<transactions>,
    ){}

    async create(budget: createBudgetDTO){
        const category = budget.category
        const wallet_id = budget.wallet_id
        const wallets = await this.walletsModel.findOne({_id: wallet_id})
        if (!wallets)
            throw new BadRequestException('invalid wallets id')
        const today = new Date()
        const object = await this.budgetModels.find({category,wallet_id:wallet_id,$expr: {
            $gt: [
              {
                $dateFromString: {
                  dateString: '$end_date',
                  format: '%d/%m/%Y'
                }
              },
              today
            ]
          }})
        if (object.length > 0)
            throw new BadRequestException('category already exists')
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
        const object = await this.budgetModels.findOne(query)
        if (object)
            {
                const res = await this.budgetModels.deleteOne(query)
                return res
            }   
        throw new BadRequestException("invalid name")
    }


    async findByID(query: Query){ 
        try{
            return await this.budgetModels.findOne(query)
        }   
        catch(error)
        {
            throw error
        }     
    }

    async findInRange(query: Query){
        return await this.budgetModels.find(query)
    }

    async Update(query: Query){
        const{_id,...remain} = query
        const object = await this.budgetModels.findOne({_id:_id})
        if (object)
            { 
                const {wallet_id,category,start_date,end_date,amount} = remain
                const wallet = await this.walletsModel.findOne({_id:wallet_id})
                if(!wallet)
                    throw new BadRequestException("invalid wallet_id")
                if ( Number(wallet.amount) < Number(amount))
                    throw new BadRequestException("not enough money in wallet")
                let o1 = await this.budgetModels.findByIdAndUpdate(_id,remain)
                o1.amount = Number(amount)         
                o1.initial_amount = Number(amount)
                await o1.save()
                let o2 = await this.transactionsModel.find({wallet_id : wallet_id,category: category})
                    const startDate: Date = parse(
                        String(start_date),
                        'dd/MM/yyyy',
                        new Date(),
                      );
                    const endDate: Date = parse(
                        String(end_date),
                        'dd/MM/yyyy',
                        new Date(),
                      );
                    const sum = o2.reduce((accumulator, currentObject) => {
                        if ( isWithinInterval(parse(currentObject.created_at, 'dd/MM/yyyy', new Date()), { start: startDate, end: endDate })) {
                          return accumulator + Number(currentObject.amount);
                        }
                        return Number(accumulator);
                      }, 0);       
                o1.amount = Number(o1.amount) - sum
                await o1.save();
                return o1
            }
        else
            throw new BadRequestException("invalid budget id")
    }

    

}
