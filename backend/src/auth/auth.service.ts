import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt'
import {LoginUserDto} from './dto/login-user.dto';
import {JwtInterfaces} from './interfaces/jwt.interfaces';
import {JwtService} from '@nestjs/jwt';
import {MailService} from '../mail/mail.service';

@Injectable()
export class AuthService {
  
  private readonly  logger = new Logger('UserService')
  constructor(
   @InjectRepository(User)
   private readonly userRepository: Repository<User>,
   private readonly jwtService:JwtService,
   private readonly mailService: MailService
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
      await this.mailService.sendMail(process.env.MAIL_USER, 'Welcome', 'Thank you for registering!');
      return {
        ...user
      }
    }catch (e) {
      this.handleExceptions(e)
    }
  }
  
  async login(loginUserDto: LoginUserDto,) {
    const {password, email} = loginUserDto
    const user = await this.userRepository.findOne({
      where:{email},
      select:{password:true, email:true, id:true}
    })
    if(!user)
      throw  new UnauthorizedException('Error credentials email')
    
    if(!bcrypt.compareSync(password, user.password))
      throw  new UnauthorizedException('Error credentials password')
    delete user.password;
    await this.mailService.sendMail(process.env.MAIL_USER, 'Login', 'Login ');
    return {
      ...user,
      token: this.getJwtToken({id:user.id})
    }
  }
  
  private getJwtToken(payload:JwtInterfaces){
    return  this.jwtService.sign(payload)
  }
  private handleExceptions(e: any){
    this.logger.error(e)
    if(e.code === 'ER_DUP_ENTRY'){
      throw new BadRequestException(e.sqlMessage)
    }
    throw new InternalServerErrorException('Unexpected error')
  }

}
