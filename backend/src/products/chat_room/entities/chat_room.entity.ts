import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({unique:true, length:100})
  name: string;
  
  @Column({ length:500})
  description: string;

}
