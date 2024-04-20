import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { WalletService } from './wallets.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import {createWalletsDto} from './dto/createWallets-dto'
import {getWalletsDto} from './dto/get_wallets-dto'
import {deleteWallets} from './dto/delete_wallets-dto'
import {money_wallets} from './dto/money_wallets-dto'
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { createUsersDto } from 'src/users/dto/create-users-dto';
import { get } from 'http';
import { query } from 'express';
@Controller('wallets')
export class WalletsController {
    constructor(private walletsService: WalletService)
    {}

    @ApiTags('Wallets')
    @Get()
    @ApiQuery({ type: getWalletsDto})
    async findwallets(@Query() query: ExpressQuery
    ){
        return this.walletsService.findwallets(query)
    }


    @ApiTags('Wallets')
    @Post()
    async createWallets(
        @Body()
        wallets:createWalletsDto
    ){
        return this.walletsService.createWallets(wallets)
    }

    @ApiTags('Wallets')
    @Delete()
    async deleteWallets(@Query() query:deleteWallets
    ){
        return this.walletsService.deleteWallets(query)
    }

    @ApiTags('Wallets')
    @Patch('deposit')
    async Depositmoney(@Body()query: money_wallets){
        return this.walletsService.deposit(query)
    }

    @ApiTags('Wallets')
    @Patch('withdraw')
    async withdrawmoney(@Body()query: money_wallets){
        return this.walletsService.withdraw(query)
    }

}

