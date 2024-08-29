import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsObject()
  marketingData: Record<string, unknown>;
}
