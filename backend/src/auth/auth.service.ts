import {BadRequestException, Injectable, InternalServerErrorException, Logger} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  
  private readonly  logger = new Logger('UserService')
  constructor(
   @InjectRepository(User)
   private readonly userRepository: Repository<User>,
  ) { }
  
  /**
   * Create a new user.
   * @param createUserDto Data to create the user.
   * @returns Created user entity.
   * @throws BadRequestException if a duplicate entry error occurs.
   * @throws InternalServerErrorException for unexpected errors.
   */
  async create(createUserDto: CreateUserDto) {
    try{
      const { password, ...userData} = createUserDto
      
      const user = this.userRepository.create({
        ...userData,
        password:bcrypt.hashSync(password,10)
      });
      await this.userRepository.save(user)
      
      delete user.password;
      delete user.isActive
      return {
        ...user
      }
    }catch (e) {
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
