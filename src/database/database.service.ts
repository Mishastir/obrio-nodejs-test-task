import { Injectable, OnApplicationBootstrap } from "@nestjs/common";

import * as entities from "./entities";
import { OrderEntity, PurchaseEntity, UserEntity } from "./entities";
import { MemoryStorage } from "./memory-storage";
import { Repository } from "./repository";

/**
 * Prisma-like style
 */
@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  readonly user: Repository<UserEntity>;
  readonly order: Repository<OrderEntity>;
  readonly purchase: Repository<PurchaseEntity>;
  private readonly storage: MemoryStorage<never> = {};

  constructor() {
    for (const entity of Object.values(entities)) {
      const entityName = entity.entityName;

      this.storage[entityName] = {};
    }

    this.user = new Repository(this.storage, UserEntity.entityName);
    this.order = new Repository(this.storage, OrderEntity.entityName);
    this.purchase = new Repository(this.storage, PurchaseEntity.entityName);
  }

  getStorage(): MemoryStorage<never> {
    return this.storage;
  }

  onApplicationBootstrap(): void {
    this.seed();
  }

  private seed(): void {
    const baseUser = new UserEntity({ email: "test@mail.com", marketingData: {} });
    this.user.save(baseUser);

    const baseOrder = new OrderEntity({ name: "First order", price: 100 });
    this.order.save(baseOrder);
  }
}
