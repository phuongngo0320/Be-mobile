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

    const temp = Number(wallets.amount) - Number(transactions.amount);
    if (temp < 0)
      throw new BadRequestException(
        'not enough money in wallets to make transaction',
      );

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
    };

    if (transactions.is_pay) {
      if (budget) {
        // update in both budget + wallet
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
          if (t2 >= t1) {
            budget.amount = 0;
          } else {
            budget.amount = Number(t1) - Number(t2);
          }
          await budget.save();
        }
      }

      wallets.amount = temp;
      await wallets.save();
    }
    const res = await this.transactionsModel.create(object);
    return res;
  }
  async histories (query : Query){
      return await this.transactionsModel.find(query)

  }
}
