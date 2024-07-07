import {BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Message} from '../../message/entities/message.entity';
@Entity('users')
export class User {
  
  
  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  
  @Column({unique:true})
  email:string;
  
  
  @Column('text',{select:false})
  password: string;
  
  
  @Column('text')
  fullName: string
  
  @Column('bool',{default:true})
  isActive:boolean
  
  @BeforeInsert()
  checkEmailInsert(){
    this.email = this.email.toLowerCase().trim()
  }
  
  @BeforeUpdate()
  checkEmailUpdate(){
    this.email = this.email.toLowerCase().trim()
  }
  
  @OneToMany(() => Message, (message) => message.userId)
  messages: Message[];
}
