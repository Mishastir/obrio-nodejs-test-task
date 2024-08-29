import { ApiProperty } from "@nestjs/swagger";

import { BaseEntity, CreateEntityParams } from "./base.entity";

export class UserEntity extends BaseEntity {
  static readonly entityName: string = "user";

  @ApiProperty()
  email: string;

  @ApiProperty()
  marketingData: Record<string, unknown>;

  constructor(data: CreateEntityParams<UserEntity>) {
    super();

    const { email, marketingData } = data;
    this.email = email;
    this.marketingData = marketingData;
  }
}
