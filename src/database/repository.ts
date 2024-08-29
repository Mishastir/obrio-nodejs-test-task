import { BaseEntity } from "./entities/base.entity";
import { MemoryStorage } from "./memory-storage";

export class Repository<T extends BaseEntity> {
  private readonly entitiesStorage: Record<string, T>;

  constructor(storage: MemoryStorage<T>, entityName: string) {
    this.entitiesStorage = storage[entityName];
  }

  get(id: string): T {
    return this.entitiesStorage[id];
  }

  getAll(): T[] {
    return Object.values(this.entitiesStorage);
  }

  save(entity: T): T {
    const id = entity.id;
    this.entitiesStorage[id] = entity;

    return this.get(id);
  }

  update(id: string, entity: Partial<T>): T {
    const record = this.get(id);
    this.entitiesStorage[id] = { ...record, ...entity };

    return this.entitiesStorage[id];
  }
}
