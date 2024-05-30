import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { transactions } from './schema/transaction.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { wallets } from '../wallets/schema/wallets-schema';
import { budget } from '../budget/schema/budget.schema';
import { createTransactionDTO } from './dto/createTransactionDTO';
import { PassThrough } from 'stream';
import { parse, isWithinInterval } from 'date-fns';
import {getHistoriesDTO} from './dto/gethistoriesDTO'

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

  async create(transactions: createTransactionDTO) {
    const wallet_id = transactions.wallet_id;

    const wallets = await this.walletsModel.findOne({ _id: wallet_id });
    if (!wallets) throw new BadRequestException('invalid wallet_id');
    const category = transactions.category;

    const budget = await this.budgetModels.findOne({ wallet_id, category });
    const now: Date = new Date();
    const date: string = now
      .toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '/');
    const [month, day, year] = date.split('/');
    const formattedDate = `${day}/${month}/${year}`;
    
    const object: transactions = {
      wallet_id: transactions.wallet_id,
      category: transactions.category,
      amount: transactions.amount,
      is_pay: transactions.is_pay,
      created_at: formattedDate,
      note_info: transactions.note_info
    };

    if (transactions.is_pay) {
      const temp = Number(wallets.amount) - Number(transactions.amount);
      if (temp < 0  )
        throw new BadRequestException(
          'not enough money in wallets to make transaction',
        );

      if (budget) {
        // update in budget
        const t1 = budget.amount;
        const t2 = transactions.amount;
        // const targetDate: Date = new Date(formattedDate);
        const targetDate: Date = parse(formattedDate, 'dd/MM/yyyy', new Date());
        const startDate: Date = parse(
          budget.start_date,
          'dd/MM/yyyy',
          new Date(),
        );
        const endDate: Date = parse(budget.end_date, 'dd/MM/yyyy', new Date());
        if (isWithinInterval(targetDate, { start: startDate, end: endDate })) {
            budget.amount = Number(t1) - Number(t2);
            await budget.save();
        }
      }

      //update in wallet
      wallets.amount = temp;
      await wallets.save();
    }
     // case ispay == false <=> get money
    else{
      const temp = Number(wallets.amount) + Number(transactions.amount);
      wallets.amount = temp;
      await wallets.save();
    }
    const res = await this.transactionsModel.create(object);
    return res;
  }
  async histories (query : Query){
      return await this.transactionsModel.find(query)

  }

  async Allhistories (query : Query){
    const {user_ID,start_date,end_date} = query
    const all_wallets =  await this.walletsModel.find({user_ID: user_ID})
    const promises = all_wallets.map(async (wallets) =>{
        const object = await this.transactionsModel.find({wallet_id:wallets._id})
        return object
        
    })
    const results = await Promise.all(promises);
    const concatenatedValues = [].concat(...results);
    if (start_date == null && end_date == null)
      {
        return concatenatedValues
      }
    // const fin = concatenatedValues.map(value => value)
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
    const filteredValues = concatenatedValues.filter((element) =>  isWithinInterval(parse(element.created_at, 'dd/MM/yyyy', new Date()), { start: startDate, end: endDate }) === true);
    return filteredValues
  }
  }
    
