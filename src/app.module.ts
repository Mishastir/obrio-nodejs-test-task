import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { PurchasesModule } from "./modules/purchases";
import { ReportsModule } from "./modules/reports";
import { UsersModule } from "./modules/users";

import { DatabaseModule } from "@database";

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    PurchasesModule,
    ReportsModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
