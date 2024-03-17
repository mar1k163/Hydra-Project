import { Injectable } from "@nestjs/common";
import { CreateUserUsergroupDto } from "./dto/create-user_usergroup.dto";
import { UpdateUserUsergroupDto } from "./dto/update-user_usergroup.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserUsergroupEntity } from "./entities/user_usergroup.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserUsergroupService {
  constructor(
    @InjectRepository(UserUsergroupEntity)
    private repository: Repository<UserUsergroupEntity>
  ) {}

  findAll() {
    return this.repository.find();
  }
}
