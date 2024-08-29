import { BaseEntity } from "./entities/base.entity";

export type MemoryStorage<T extends BaseEntity> = Record<string, Record<string, T>>;
