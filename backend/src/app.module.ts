import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import { ChatRoomModule } from './chat_room/chat_room.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities:true,
      synchronize:true //only dev
    }),
   ChatRoomModule,
   CommonModule,
   AuthModule
  ],
})
export class AppModule {}
