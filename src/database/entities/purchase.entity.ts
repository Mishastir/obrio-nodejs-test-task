import { ApiProperty } from "@nestjs/swagger";

import { BaseEntity, CreateEntityParams } from "./base.entity";

export class PurchaseEntity extends BaseEntity {
  static readonly entityName: string = "purchase";

  @ApiProperty()
  offerId: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  isReportSent?: boolean;

  constructor(data: CreateEntityParams<PurchaseEntity>) {
    super();
    const { offerId, userId, isReportSent = false } = data;

    this.offerId = offerId;
    this.userId = userId;
    this.isReportSent = isReportSent;
  }
}
