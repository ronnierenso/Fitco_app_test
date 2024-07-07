import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
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
    @ApiProperty({
        example: 'Asesam0.',
        description: 'Password',
        minLength:6,
        maxLength:50
    })
    @Matches(
     /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
         message: 'The password must have a Uppercase, lowercase letter and a number'
     })
    password: string;
    
    @IsString()
    @MinLength(10)
    @ApiProperty({
        example: 'Ronnie Velasquez Lupa',
        description: 'Full Name',
        minLength:20
    })
    fullName:string
}
