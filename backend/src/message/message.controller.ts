import {Controller, Post, Body, Request, UseGuards} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import {Message} from './entities/message.entity';
import {ApiBearerAuth, ApiResponse, ApiTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';

@ApiTags('Message')
@ApiBearerAuth()
@UseGuards(AuthGuard())
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
