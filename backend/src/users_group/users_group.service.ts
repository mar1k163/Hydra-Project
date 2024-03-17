import { Injectable } from "@nestjs/common";
import { CreateUsersGroupDto } from "./dto/create-users_group.dto";
import { UpdateUsersGroupDto } from "./dto/update-users_group.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersGroupEntity } from "./entities/users_group.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersGroupService {
  constructor(
    @InjectRepository(UsersGroupEntity)
    private repository: Repository<UsersGroupEntity>
  ) {}

  create(createUsersGroupDto: CreateUsersGroupDto) {
    return this.repository.save(createUsersGroupDto);
  }

  findAll() {
    return this.repository.find();
  }
}
