import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersGroupService } from './users_group.service';
import { CreateUsersGroupDto } from './dto/create-users_group.dto';
import { UpdateUsersGroupDto } from './dto/update-users_group.dto';

@Controller('users-group')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersGroupDto: UpdateUsersGroupDto) {
    return this.usersGroupService.update(+id, updateUsersGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersGroupService.remove(+id);
  }
}
