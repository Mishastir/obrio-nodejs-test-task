import { ApiProperty } from "@nestjs/swagger";

import { BaseEntity, CreateEntityParams } from "./base.entity";

export class OrderEntity extends BaseEntity {
  static readonly entityName: string = "order";

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  constructor(data: CreateEntityParams<OrderEntity>) {
    super();

    const { name, price } = data;
    this.name = name;
    this.price = price;
  }
}
