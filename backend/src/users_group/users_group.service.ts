import { Injectable } from '@nestjs/common';
import { CreateUsersGroupDto } from './dto/create-users_group.dto';
import { UpdateUsersGroupDto } from './dto/update-users_group.dto';

@Injectable()
export class UsersGroupService {
  create(createUsersGroupDto: CreateUsersGroupDto) {
    return 'This action adds a new usersGroup';
  }

  findAll() {
    return `This action returns all usersGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersGroup`;
  }

  update(id: number, updateUsersGroupDto: UpdateUsersGroupDto) {
    return `This action updates a #${id} usersGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersGroup`;
  }
}
