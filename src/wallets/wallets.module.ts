import { Module } from '@nestjs/common';
import { WalletsController } from './wallets.controller';
import { WalletService } from './wallets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { walletsSchema } from './schema/wallets-schema';
import { usersSchema } from 'src/users/schema/users-schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'wallets',schema: walletsSchema},{name: 'Users',schema: usersSchema}])],
  controllers: [WalletsController],
  providers: [WalletService]
})
export class WalletModule {}
