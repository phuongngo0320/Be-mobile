import { BudgetService } from './budget.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import {createBudgetDTO} from './dto/createBudget'
import {deleteBudgetDTO} from './dto/deleteBudget'
import {findByIdDTO} from './dto/findByIdDTO'
import {findInRangeDTO} from './dto/findInRange'
import {updateBudgetDtO} from './dto/updateBudget'
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


    @ApiOperation({ summary: 'find Budget by budget_id' })
    @ApiTags('budgets')
    @Get('ids')
    @ApiQuery({ type: findByIdDTO})
    async findById(@Query() query: ExpressQuery
    ){
        return this.budgetService.findByID(query)
    }

    @ApiOperation({ summary: 'find all Budget by wallets_id in range' })
    @ApiTags('budgets')
    @Get('ranges')
    @ApiQuery({ type: findInRangeDTO})
    async findInRange(@Query() query: ExpressQuery
    ){
        return this.budgetService.findInRange(query)
    }


    @ApiOperation({ summary: 'update Budget ' })
    @ApiTags('budgets')
    @Patch()
    @ApiQuery({ type: updateBudgetDtO})
    async Update(@Query() query: ExpressQuery
    ){
        return this.budgetService.Update(query)
    }


}
