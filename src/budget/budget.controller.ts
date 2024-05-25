import { BudgetService } from './budget.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import {createBudgetDTO} from './dto/createBudget'
import {deleteBudgetDTO} from './dto/deleteBudget'
import { Query as ExpressQuery } from 'express-serve-static-core';


@Controller('budgets')
export class BudgetController {
    constructor(private budgetService: BudgetService)
    {   }

    @ApiOperation({ summary: 'create Budget' })
    @ApiTags('budgets')
    @Post()
    async createBudget (
    @Body()
    budget: createBudgetDTO
    ){
        return this.budgetService.create(budget)
    }

    @ApiOperation({ summary: 'delete Budget' })
    @ApiTags('budgets')
    @Delete()
    @ApiQuery({ type: deleteBudgetDTO})
    async deleteBudget(@Query() query: ExpressQuery
    ){
        return this.budgetService.delete(query)
    }

}
