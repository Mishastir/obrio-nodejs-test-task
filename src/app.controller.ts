import { Controller, Get, HttpStatus } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

import { MemoryStorage } from "./database/memory-storage";

import { DatabaseService } from "@database";

@Controller()
export class AppController {
  constructor(
    private readonly databaseService: DatabaseService,
  ) {}

  @Get("storage")
  @ApiResponse({ status: HttpStatus.OK, type: Object })
  getStorage(): MemoryStorage<never> {
    return this.databaseService.getStorage();
  }
}
