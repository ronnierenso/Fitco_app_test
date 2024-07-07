import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('text')
  content:string
  
  @CreateDateColumn()
  timestamp:Date
  
  @Column('text')
  userId:string
  
  @Column('text')
  chatRoomId:string
}
