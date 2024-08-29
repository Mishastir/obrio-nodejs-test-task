import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "../dto";

import { DatabaseService, UserEntity } from "@database";

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
  ) {}

  create(data: CreateUserDto): UserEntity {
    const entity = new UserEntity(data);
    return this.databaseService.user.save(entity);
  }
}
