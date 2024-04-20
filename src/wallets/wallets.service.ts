import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { wallets} from './schema/wallets-schema'
import {createWalletsDto} from './dto/createWallets-dto'
import {deleteWallets} from './dto/delete_wallets-dto'

import {money_wallets} from './dto/money_wallets-dto'
import mongoose from 'mongoose';

import { Query } from 'express-serve-static-core';
import {Users} from '../users/schema/users-schema'
@Injectable()
export class WalletService {
    constructor(
        @InjectModel(wallets.name)
        private walletsModel: mongoose.Model<wallets>,
        @InjectModel(Users.name)
        private usersModel: mongoose.Model<Users>
    ){}

    async findwallets(query: Query): Promise<wallets[]> {
        const keys = Object.keys(query)
        if (keys.length == 0)
            return  await this.walletsModel.find();
        return await this.walletsModel.find(query);
    }

    async deposit(query:money_wallets)
    {
        const values: string[] = Object.values(query)
        const email = values[0]
        const deposit_money = values[1]
        const wallets_name = values[2]
        const users = await this.usersModel.findOne({email})
        if (!users)
            throw new BadRequestException('invalid email');
        const wallet = await this.walletsModel.findOne({email,wallets_name})
        if (!wallet)
            throw new BadRequestException('wallet is not created');
        wallet.budget = Number(parseInt(deposit_money) + parseInt(wallet.budget.toString()))
        wallet.left = Number(parseInt(deposit_money) + parseInt(wallet.left.toString()))
        const res =  wallet.save()
        const message =  'Success';
        return message
    }
    async withdraw(query:money_wallets)
    {
        const values: string[] = Object.values(query)
        const email = values[0]
        const wallets_name = values[2]
        const users = await this.usersModel.findOne({email})
        if (!users)
            throw new BadRequestException('invalid email');
        const withdraw_money = values[1]
        const wallet = await this.walletsModel.findOne({email,wallets_name})
        if (!wallet)
            throw new BadRequestException('wallet is not created');
        if(parseInt(withdraw_money) > parseInt(wallet.left.toString()))
            throw new BadRequestException('not enough money to withdraw')

        wallet.left = Number(parseInt(wallet.left.toString()) - parseInt(withdraw_money))
        
        wallet.spend = Number(parseInt(withdraw_money) + parseInt(wallet.spend.toString()))
        const res = await wallet.save()
        const message =  'Success';
        return message
    }
    async createWallets(wallets:createWalletsDto)
    {
        const {wallets_name} = wallets
        const { email } = wallets
        const {budget} = wallets
        const users = await this.usersModel.findOne({email})
        if (!users)
            throw new BadRequestException('invalid email');
        const object = await this.walletsModel.findOne({wallets_name});
        if(object)
            throw new BadRequestException('wallets name already existed')
        var res = await this.walletsModel.create(wallets)
        res.left = Number(budget)

        return await res.save()
    }
    async deleteWallets(query:deleteWallets)
    {
        const {email} = query
        const users = await this.usersModel.findOne({email})
        if (!users)
            throw new BadRequestException('invalid email');
        const object = await this.walletsModel.findOne(query);
        if(!object)
            throw new NotFoundException('wallets name is not existed')
        await this.walletsModel.findOneAndDelete(query)
        const message =  'Success';
        return {message}
    }



}
