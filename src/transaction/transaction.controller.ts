import { Controller } from '@nestjs/common';
import {TransactionService} from './transaction.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Body,Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import {createTransactionDTO} from './dto/createTransactionDTO'

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService)
    {

    }
    @ApiOperation({ summary: 'create Budget' })
    @ApiTags('transactions')
    @Post()
    async createBudget(
    @Body()
    transactions: createTransactionDTO
    ){
        return this.transactionService.create(transactions)
    }

}
