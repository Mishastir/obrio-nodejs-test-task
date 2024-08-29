import { randomUUID } from "node:crypto";

import { ApiProperty } from "@nestjs/swagger";

export type CreateEntityParams<T extends BaseEntity> = Omit<T, "id" | "createdAt">

export class BaseEntity {
  protected static readonly entityName: string = "Base";

  @ApiProperty()
  public readonly id: string;

  @ApiProperty()
  public readonly createdAt: Date;

  constructor(
    id: string = randomUUID(),
    createdAt: Date = new Date(),
  ) {
    this.id = id;
    this.createdAt = createdAt;
  }
}
