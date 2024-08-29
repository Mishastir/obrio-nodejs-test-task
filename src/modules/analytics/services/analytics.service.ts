import { Injectable } from "@nestjs/common";

import { SendToAnalyticsDto } from "../dto";

import { HttpService } from "@module/common/http";

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async send(data: SendToAnalyticsDto): Promise<void> {
    await this.httpService.request({ to: "Analytics", ...data });
  }
}
