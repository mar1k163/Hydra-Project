import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UserStatusService } from "./user-status.service";
import { CreateUserStatusDto } from "./dto/create-user-status.dto";
import { UpdateUserStatusDto } from "./dto/update-user-status.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("user-status")
@ApiTags("user-status")
export class UserStatusController {
  constructor(private readonly userStatusService: UserStatusService) {}

  @Post()
  create(@Body() createUserStatusDto: CreateUserStatusDto) {
    return this.userStatusService.create(createUserStatusDto);
  }

  @Get()
  findAll() {
    return this.userStatusService.findAll();
  }
}
