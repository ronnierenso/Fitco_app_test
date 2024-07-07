import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { ChatRoomController } from './chat_room.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChatRoom} from './entities/chat_room.entity';
import {PassportModule} from '@nestjs/passport';

@Module({
  controllers: [ChatRoomController],
  providers: [ChatRoomService],
  imports:[
    TypeOrmModule.forFeature([ChatRoom]),
    PassportModule.register({defaultStrategy:'jwt'})
  ]
})
export class ChatRoomModule {}
