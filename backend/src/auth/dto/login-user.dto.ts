import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Email',
    uniqueItems:true
  })
  email:string;
  
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(
   /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
     message: 'The password must have a Uppercase, lowercase letter and a number'
   })
  @ApiProperty({
    example: 'Asesam0.',
    description: 'Password',
    minLength:6,
    maxLength:50
  })
  password: string;
  
}
