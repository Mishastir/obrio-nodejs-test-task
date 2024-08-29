import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

import { ReportsService } from "./services";

import { HttpService } from "@module/common/http";

@Module({
  imports: [
    ScheduleModule.forRoot(),
  ],
  providers: [
    ReportsService,
    HttpService,
  ],
})
export class ReportsModule {}
