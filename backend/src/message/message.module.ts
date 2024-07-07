import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Message} from "./entities/message.entity";
import {PassportModule} from "@nestjs/passport";

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports:[
    TypeOrmModule.forFeature([Message]),
    PassportModule.register({defaultStrategy:'jwt'}),
  ],
  exports:[TypeOrmModule]
})
export class MessageModule {}

