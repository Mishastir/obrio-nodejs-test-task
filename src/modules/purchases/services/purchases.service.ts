import { Injectable } from "@nestjs/common";

import { AnalyticsEvent } from "../../analytics/enums";
import { AnalyticsService } from "../../analytics/services";
import { CreatePurchaseDto } from "../dto";

import { DatabaseService, PurchaseEntity } from "@database";

@Injectable()
export class PurchasesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly analyticsService: AnalyticsService,
  ) {}

  async create(data: CreatePurchaseDto): Promise<PurchaseEntity> {
    const entity = new PurchaseEntity(data);
    const newPurchase = this.databaseService.purchase.save(entity);

    await this.analyticsService.send({ event: AnalyticsEvent.NEW_PURCHASE, data: entity });

    return newPurchase;
  }
}
