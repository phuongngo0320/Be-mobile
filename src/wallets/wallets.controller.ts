import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { WalletService } from './wallets.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import {createWalletsDto} from './dto/createWallets-dto'
import {getWalletsDto} from './dto/get_wallets-dto'
import {getWalletsById} from './dto/getWalletById'
import {deleteWallets} from './dto/delete_wallets-dto'
import {money_wallets} from './dto/money_wallets-dto'
import {updateWallets} from './dto/updateWallet-dto'
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { createUsersDto } from 'src/users/dto/create-users-dto';
import { get } from 'http';
import { query } from 'express';
@Controller('wallets')
export class WalletsController {
    constructor(private walletsService: WalletService)
    {}

    @ApiOperation({ summary: 'get wallets by user ID' })
    @ApiTags('Wallets')
    @Get('byUsersId')
    @ApiQuery({ type: getWalletsDto})
    async findwallets(@Query() query: ExpressQuery
    ){
        return this.walletsService.findwallets(query)
    }

    @ApiOperation({ summary: 'Create a wallets' })
    @ApiTags('Wallets')
    @Post()
    async createWallets(  
        @Body()
        wallets:createWalletsDto
    ){
        return this.walletsService.createWallets(wallets)
    }
    

    @ApiOperation({ summary: 'delete a wallets' })
    @ApiTags('Wallets')
    @Delete()
    async deleteWallets(@Query() query:deleteWallets
    ){
        return this.walletsService.deleteWallets(query)
    }


    @ApiOperation({ summary: 'deposit money to wallet' })
    @ApiTags('Wallets')
    @Patch('deposit')
    async Depositmoney(@Body()query: money_wallets){
        return this.walletsService.deposit(query)
    }

    @ApiOperation({ summary: 'withdraw money from wallet' })
    @ApiTags('Wallets')
    @Patch('withdraw')
    async withdrawmoney(@Body()query: money_wallets){
        return this.walletsService.withdraw(query)
    }

    
    @ApiOperation({ summary: 'get wallets by wallet_ID' })
    @ApiTags('Wallets')
    @Get('byWalletsId')
    @ApiQuery({ type: getWalletsById})
    async findWalletsById(@Query() query: ExpressQuery
    ){
        return this.walletsService.findById(query)
    }


    @ApiOperation({ summary: 'update wallets' })
    @ApiTags('Wallets')
    @Patch()
    @ApiQuery({ type: updateWallets})
    async updateWallets(@Query() query: ExpressQuery
    ){
        return this.walletsService.updateWallets(query)
    }


   

}

