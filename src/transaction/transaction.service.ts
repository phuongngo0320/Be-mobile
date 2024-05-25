import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {transactions} from './schema/transaction.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { wallets} from '../wallets/schema/wallets-schema'
import {budget} from '../budget/schema/budget.schema'
import {createTransactionDTO} from './dto/createTransactionDTO'
import { PassThrough } from 'stream';


@Injectable()
export class TransactionService {
    constructor(
        @InjectModel(transactions.name)
        private transactionsModel: mongoose.Model<transactions>,
        @InjectModel(wallets.name)
        private walletsModel: mongoose.Model<wallets>,
        @InjectModel(budget.name)
        private budgetModels: mongoose.Model<budget>,
    ) {}

    async create( transactions : createTransactionDTO){
        const wallet_id = transactions.wallet_id
        
        const wallets =  await this.walletsModel.findOne({_id: wallet_id})
        if (!wallets)
            throw new BadRequestException("invalid wallet_id")
        const category = transactions.category
        
        const budget = await this.budgetModels.findOne({wallet_id,category})
        
        const now: Date = new Date();
        const formattedDate: string = now.toLocaleString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }).replace(/\//g, '/');
        const object : transactions= {
            wallet_id: transactions.wallet_id,
            category: transactions.category,
            amount: transactions.amount,
            is_pay : transactions.is_pay,
            created_at: formattedDate
        }
        if(budget) // update in both budget + wallet
            {
                const targetDate: Date = new Date(formattedDate);
                const startDate: Date = new Date(budget.start_date);
                const endDate: Date = new Date(budget.end_date);
                if (targetDate >= startDate && targetDate <= endDate)
                    {
                        const t1 = budget.amount
                        const t2 = transactions.amount
                        if (t2 >= t1){
                            budget.amount = 0 
                            await budget.save()
                        }
                        else{
                            budget.amount = Number(t1) - Number(t2)
                            await budget.save()
                        }
                    }
            }
        const temp = Number(wallets.amount) - Number(transactions.amount) 
        if(temp < 0 )
            throw new BadRequestException("not enough money to make transaction")
        wallets.amount = temp
        await wallets.save()
        
        const res = await this.transactionsModel.create(object)
        return res

    }
}
