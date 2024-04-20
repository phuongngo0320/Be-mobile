import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchema } from './schema/users-schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users',schema: usersSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
