import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreatePurchaseDto {
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  offerId: string;
}
