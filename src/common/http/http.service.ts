import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class HttpService {
  private readonly logger = new Logger(HttpService.name);

  async request<T>(params: unknown): Promise<T> {
    this.logger.log("Sending http request with next params:", params);

    return await new Promise<T>((resolve) => {
      setTimeout(() => resolve(undefined), 200);
    });
  }
}
