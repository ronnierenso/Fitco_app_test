import {IsString, IsUUID, MinLength} from "class-validator";
import { ManyToOne} from "typeorm";
import {User} from "../../auth/entities/user.entity";
import {ChatRoom} from "../../chat_room/entities/chat_room.entity";

export class CreateMessageDto {
  
  @IsString()
  @MinLength(5)
  content:string
  
  @IsString()
  @IsUUID()
  chatRoomId:string
  
  @ManyToOne(() => User, (user) => user.messages)
  user: User;
  
  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.messages)
  chatRoom: ChatRoom;
}
