import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Message} from '../../message/entities/message.entity';

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({unique:true, length:100})
  name: string;
  
  @Column({ length:500})
  description: string;
  
  @OneToMany(() => Message, (message) => message.chatRoomId)
  messages: Message[];

}
