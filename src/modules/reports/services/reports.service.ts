import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";

import { DatabaseService, PurchaseEntity } from "@database";
import { ONE_DAY } from "@module/common/constants";
import { HttpService } from "@module/common/http";

@Injectable()
export class ReportsService {
  private readonly logger = new Logger(ReportsService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async handleCron(): Promise<void> {
    const purchases = this.databaseService.purchase.getAll();

    const purchasesToSend: PurchaseEntity[] = [];

    for (const purchase of purchases) {
      const timeDifference = Date.now() - purchase.createdAt.getTime();

      if (!purchase.isReportSent && timeDifference >= ONE_DAY) {
        purchasesToSend.push(purchase);
      }
    }

    if (!purchasesToSend.length) {
      return;
    }

    const result = await Promise.allSettled(
      purchasesToSend.map(async (el) => {
          await this.httpService.request({
            to: el.userId,
            type: "Astrological report",
          });

          return el;
        },
      ),
    );

    const fulfilledResults = result.filter((el) => el.status === "fulfilled");
    const fulfilledCount = fulfilledResults.length;

    for (const fulfilled of fulfilledResults) {
      const id = (fulfilled.value as PurchaseEntity).id;
      this.databaseService.purchase.update(id, { isReportSent: true });
    }

    this.logger.log(`Finished sending reports. Successful: ${fulfilledCount}, Failed: ${purchasesToSend.length - fulfilledCount}`);
  }
}
