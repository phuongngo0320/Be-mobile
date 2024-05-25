import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { transactionsSchema} from './schema/transaction.schema'
import {walletsSchema} from '../wallets/schema/wallets-schema'
import { budgetSchema } from 'src/budget/schema/budget.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'transactions',schema: transactionsSchema},{name: 'wallets',schema: walletsSchema},{name: 'budget',schema: budgetSchema}])],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
