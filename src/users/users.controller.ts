import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUsersDto } from './dto/create-users-dto';
import { change_password } from './dto/change_password-dto';
import {getUsersDto} from './dto/get-user-dto'
import {loginDTO} from './dto/login-dto'
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ApiHeader, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
@Controller('Users')
export class UsersController {
    constructor(private usersService: UsersService)
    {}


    @ApiOperation({ summary: 'get a user by name or mail, let empty both will get all users' })
    @ApiTags('Users')
    @Get()
    @ApiQuery({ type: getUsersDto})
    async getUsers(@Query() query: ExpressQuery){
        return await this.usersService.GetAllUsers(query)     
    }

    @ApiOperation({ summary: 'Create a user' })
    @ApiTags('Users')
    @Post('new')
    async createUser(
        @Body()
        users: createUsersDto
                ){
        return this.usersService.create(users)
    }

    @ApiOperation({ summary: 'change password' })
    @ApiTags('Users')
    @Patch('password')
    async changepassword(
        @Body() change : change_password
    ){
        return this.usersService.changepassword(change)
    }


    @ApiOperation({ summary: 'delete users ' })
    @ApiTags('Users')
    @Delete()
    @ApiQuery({ type: createUsersDto})
    async deleteUsers(@Query() query){
        return this.usersService.deleteUsers(query)
    }

    @ApiOperation({ summary: 'login' })
    @ApiTags('Users')
    @Get('login')
    @ApiQuery({ type: loginDTO})
    async login(@Query() query){
        return await this.usersService.login(query)     
    }

}

