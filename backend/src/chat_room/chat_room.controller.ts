import {Controller, Get, Post, Body, Param, Delete, Query} from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { CreateChatRoomDto } from './dto/create-chat_room.dto';
import {PaginationDto} from '../common/dto/pagination.dto';

@Controller('chat-room')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Post()
  create(@Body() createChatRoomDto: CreateChatRoomDto) {
    return this.chatRoomService.create(createChatRoomDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.chatRoomService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatRoomService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatRoomService.remove(id);
  }
}
