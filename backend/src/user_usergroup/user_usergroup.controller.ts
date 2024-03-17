import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UserUsergroupService } from "./user_usergroup.service";
import { CreateUserUsergroupDto } from "./dto/create-user_usergroup.dto";
import { UpdateUserUsergroupDto } from "./dto/update-user_usergroup.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("user-usergroup")
@ApiTags("user-usergroup")
export class UserUsergroupController {
  constructor(private readonly userUsergroupService: UserUsergroupService) {}

  @Get()
  findAll() {
    return this.userUsergroupService.findAll();
  }
}
