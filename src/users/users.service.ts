import { HttpStatus,BadGatewayException, BadRequestException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import  {Users} from "./schema/users-schema"
import { NotFoundError } from 'rxjs';
import { Query } from 'express-serve-static-core';
import { change_password } from './dto/change_password-dto';
import { createWalletsDto } from 'src/wallets/dto/createWallets-dto';
import { createUsersDto } from './dto/create-users-dto';
import {loginDTO} from './dto/login-dto'
import { deleteUsersDto } from './dto/deleteUser-dto';

import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name)
        private usersmodel: mongoose.Model<Users>
    ) {}

    async GetAllUsers(query: Query): Promise<Users[]> {
        const keys = Object.keys(query)
        if (keys.length == 0)
            return  await this.usersmodel.find();
        return await this.usersmodel.find(query);
    }

    async create(users:Users){
        const email = users.email
        const user = await this.usersmodel.findOne({email});
        if(user)
            throw new BadRequestException('email already exists');
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(users.password, salt);
        users.password = hash
        const res = await this.usersmodel.create(users)
        return res
    }

    async login (query:loginDTO){
        const {email,password} = query
        const user = await this.usersmodel.findOne({email});
        if(!user)
            throw new BadRequestException('not found email');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            throw new BadRequestException("wrong password")
        return user
    }
    
    async changepassword(change_password:change_password): Promise<{message:String}>{
        const values: string[] = Object.values(change_password)
        const email = values[0]
        const oldpassword = values[1]
        const password = values[2]
        const user = await this.usersmodel.findOne({email});
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isMatch = await bcrypt.compare(oldpassword, user.password);
        if (!isMatch)
            throw new BadRequestException("wrong old password")
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password,salt);
        user.password = hash
        await user.save();
        const message =  'Success';
        return {message} ;
    }

    async deleteUsers(query:deleteUsersDto){
        const {_id} = query
        const user = await this.usersmodel.findOne({_id});
        if (!user) {
            throw new NotFoundException('invalid user_id');
        }
        await this.usersmodel.deleteOne(query)
        const message =  'Success' ;
        return {message} ;
       }

}
