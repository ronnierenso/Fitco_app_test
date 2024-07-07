import {IsString, IsUUID, MinLength} from "class-validator";
import { ManyToOne} from "typeorm";
import {User} from "../../auth/entities/user.entity";
import {ChatRoom} from "../../chat_room/entities/chat_room.entity";
import {ApiProperty} from '@nestjs/swagger';

export class CreateMessageDto {
  
  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: 'Hello world',
    description: 'Random messages',
    minLength:5
  })
  content:string
  
  @IsString()
  @IsUUID()
  @ApiProperty({
    example: '0dc18b4d-a936-47e7-a77b-0814c2a8d3e5',
    description: 'UUID chat room',
  })
  chatRoomId:string
  
  @ManyToOne(() => User, (user) => user.messages)
  user: User;
  
  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.messages)
  chatRoom: ChatRoom;
}
