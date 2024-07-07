import {BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException} from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat_room.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {ChatRoom} from './entities/chat_room.entity';
import {Repository} from 'typeorm';

@Injectable()
export class ChatRoomService {
  private readonly  logger = new Logger('ChatRoomService') // Logger instance for logging events and errors
  constructor(
   @InjectRepository(ChatRoom)
   private readonly chatRoomRepository:Repository<ChatRoom>
  ) {}
  
  /**
   * Create a new chat room.
   * @param createChatRoomDto Data to create the chat room.
   * @returns Created chat room entity.
   * @throws BadRequestException if a duplicate entry error occurs.
   * @throws InternalServerErrorException for unexpected errors.
   */
  async create(createChatRoomDto: CreateChatRoomDto) {
    try {
      const chatRoom = this.chatRoomRepository.create(createChatRoomDto)
      return await this.chatRoomRepository.save((chatRoom))
    } catch (e) {
      this.handleExceptions(e)
    }
  }
  
  /**
   * Find all chat rooms.
   * @returns List of chat room entities.
   */
  async findAll() {
    return await this.chatRoomRepository.find();
  }
  
  /**
   * Find a chat room by ID.
   * @param id ID of the chat room to find.
   * @returns Found chat room entity.
   */
  async findOne(id: string) {
    const chatRoom = await this.chatRoomRepository.findOneBy({ id });
    if (!chatRoom)
      throw new NotFoundException(`Chat room with id ${id} not found`);
    return chatRoom;
  }
  
  /**
   * Remove a chat room by ID.
   * @param id ID of the chat room to remove.
   * @returns Removed chat room entity.
   */
  async remove(id: string) {
    const chatRoom = await this.findOne(id);
    return await this.chatRoomRepository.remove(chatRoom);
  }
  
  /**
   * Handle exceptions thrown during database operations.
   * @param e Exception object.
   * @throws BadRequestException if a duplicate entry error occurs.
   * @throws InternalServerErrorException for unexpected errors.
   */
  private handleExceptions(e: any){
    this.logger.error(e)
    if(e.code === 'ER_DUP_ENTRY'){
      throw new BadRequestException(e.sqlMessage)
    }
    throw new InternalServerErrorException('Unexpected error')
  }
}
