import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

import { CreateUserDto } from "../dto";
import { UsersService } from "../services";

import { UserEntity } from "@database";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: UserEntity })
  createUser(@Body() body: CreateUserDto): UserEntity {
    return this.usersService.create(body);
  }
}
