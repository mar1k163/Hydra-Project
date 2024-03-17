import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersGroupService } from "./users_group.service";
import { CreateUsersGroupDto } from "./dto/create-users_group.dto";
import { UpdateUsersGroupDto } from "./dto/update-users_group.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("users-group")
@ApiTags("users-group")
export class UsersGroupController {
  constructor(private readonly usersGroupService: UsersGroupService) {}

  @Post()
  create(@Body() createUsersGroupDto: CreateUsersGroupDto) {
    return this.usersGroupService.create(createUsersGroupDto);
  }

  @Get()
  findAll() {
    return this.usersGroupService.findAll();
  }
}
