import { Module } from "@nestjs/common";

import { AnalyticsService } from "./services";

import { HttpService } from "@module/common/http";

@Module({
  providers: [
    AnalyticsService,
    HttpService,
  ],
  exports: [
    AnalyticsService,
  ],
})
export class AnalyticsModule {}
