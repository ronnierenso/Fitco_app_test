import { Controller, Post, Body, Request } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  
  @Post()
  create(@Request() req, @Body() createMessageDto: CreateMessageDto) {
    console.log(req.user)
    return this.messageService.create(createMessageDto, req.user.id);
  }
}
