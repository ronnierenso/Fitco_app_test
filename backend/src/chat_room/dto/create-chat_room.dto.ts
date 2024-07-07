import {IsString, MinLength} from "class-validator";

export class CreateChatRoomDto {
  @IsString()
  @MinLength(5)
  name:string
  
  @IsString()
  @MinLength(5)
  description:string
}
