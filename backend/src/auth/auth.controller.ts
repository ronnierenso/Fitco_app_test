import {Controller, Get, Post, Body, Patch, Param, Delete, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {User} from './entities/user.entity';

@ApiTags('User')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({status:201, description:'User register', type:User})
  @ApiResponse({status:400, description:'Bad request'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }
  
  @Post('login')
  @ApiResponse({status:201, description:'User login', type:User})
  @ApiResponse({status:400, description:'Bad request'})
  async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response) {
    return await this.authService.login(loginUserDto);
  }

 
}
