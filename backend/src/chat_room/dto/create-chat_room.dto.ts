import {IsString, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateChatRoomDto {
  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: 'Personal room.',
    description: 'Room name',
    uniqueItems:true,
    minLength:5
  })
  name:string
  
  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: 'Description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    uniqueItems:true,
    minLength:500
  })
  description:string
}
