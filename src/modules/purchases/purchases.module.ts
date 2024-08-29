import { Module } from "@nestjs/common";

import { AnalyticsModule } from "../analytics";

import { PurchasesController } from "./controllers";
import { PurchasesService } from "./services";

@Module({
  imports: [AnalyticsModule],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
