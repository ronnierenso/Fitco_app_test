import { Controller, Post, Body, Request } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import {Message} from './entities/message.entity';
import {ApiResponse} from '@nestjs/swagger';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  
  @Post()
  @ApiResponse({status:201, description:'Chat room', type:Message})
  @ApiResponse({status:400, description:'Bad request'})
  @ApiResponse({status:401, description:'Unauthorized'})
  create(@Request() req, @Body() createMessageDto: CreateMessageDto) {
    console.log(req.user)
    return this.messageService.create(createMessageDto, req.user.id);
  }
}
