import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

import { CreatePurchaseDto } from "../dto";
import { PurchasesService } from "../services";

import { PurchaseEntity } from "@database";

@Controller("purchases")
export class PurchasesController {
  constructor(
    private readonly purchasesService: PurchasesService,
  ) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: PurchaseEntity })
  async createPurchase(@Body() body: CreatePurchaseDto): Promise<PurchaseEntity> {
    return await this.purchasesService.create(body);
  }
}
