import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { budgetSchema } from './schema/budget.schema';
import {walletsSchema} from '../wallets/schema/wallets-schema'
@Module({
  imports: [MongooseModule.forFeature([{name: 'budget',schema: budgetSchema},{name: 'wallets',schema: walletsSchema}])],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {

  
}
