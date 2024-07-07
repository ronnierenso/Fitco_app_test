import {BadRequestException, Injectable, InternalServerErrorException, Logger} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Message} from "./entities/message.entity";
import {Repository} from "typeorm";

@Injectable()
export class MessageService {
  private readonly  logger = new Logger('MessageService')
  constructor(
   @InjectRepository(Message)
   private readonly messageRepository:Repository<Message>
  ) {}
  
  async create(createMessageDto: CreateMessageDto, userId:string) {
    try{
      const messageDto = {...createMessageDto, userId}
      const message = this.messageRepository.create(messageDto)
      await this.messageRepository.save(message)
      return message
    } catch (e) {
      this.handleExceptions(e)
    }
    
  }
  
  private handleExceptions(e: any){
    this.logger.error(e)
    if(e.code === 'ER_DUP_ENTRY'){
      throw new BadRequestException(e.sqlMessage)
    }
    throw new InternalServerErrorException('Unexpected error')
  }
}
