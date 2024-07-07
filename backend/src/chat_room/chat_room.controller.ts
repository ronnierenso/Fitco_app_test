import {Controller, Get, Post, Body, Param, Delete, Query, UseGuards} from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { CreateChatRoomDto } from './dto/create-chat_room.dto';
import {PaginationDto} from '../common/dto/pagination.dto';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {ChatRoom} from './entities/chat_room.entity';

@ApiTags('Chat room')
@Controller('chat-room')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Post()
  @ApiResponse({status:201, description:'Chat room', type:ChatRoom})
  @ApiResponse({status:400, description:'Bad request'})
  @ApiResponse({status:401, description:'Unauthorized'})
  create(@Body() createChatRoomDto: CreateChatRoomDto) {
    return this.chatRoomService.create(createChatRoomDto);
  }

  @Get()
  @ApiResponse({status:201, description:'Get all room', type:ChatRoom})
  @ApiResponse({status:400, description:'Bad request'})
  @ApiResponse({status:401, description:'Unauthorized'})
  findAll(@Query() paginationDto: PaginationDto) {
    return this.chatRoomService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiResponse({status:201, description:'Get room by id', type:ChatRoom})
  @ApiResponse({status:400, description:'Bad request'})
  @ApiResponse({status:401, description:'Unauthorized'})
  findOne(@Param('id') id: string) {
    return this.chatRoomService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatRoomService.remove(id);
  }
}
