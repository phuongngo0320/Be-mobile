import { Controller } from '@nestjs/common';
import {TransactionService} from './transaction.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Body,Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import {createTransactionDTO} from './dto/createTransactionDTO'
import {getHistoriesDTO} from './dto/gethistoriesDTO'
import {getAllistoriesDTO} from './dto/getallhistoriesDTO'

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService)
    {

    }
    @ApiOperation({ summary: 'create transactions' })
    @ApiTags('transactions')
    @Post()
    async createBudget(
    @Body()
    transactions: createTransactionDTO
    ){
        return this.transactionService.create(transactions)
    }

    @ApiOperation({ summary: 'transaction history by wallet_ID' })
    @ApiTags('transactions')
    @ApiQuery({ type: getHistoriesDTO})
    @Get('histories')
    async getHistories(@Query() query :ExpressQuery ){
        return this.transactionService.histories(query)
    }

    @ApiOperation({ summary: 'transaction history by user_ID' })
    @ApiTags('transactions')
    @ApiQuery({ type: getAllistoriesDTO})
    @Get('histories/all')
    async getAllHistories(@Query() query :ExpressQuery ){
        return this.transactionService.Allhistories(query)
    }

}
