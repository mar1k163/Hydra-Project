import { Injectable } from "@nestjs/common";
import { CreateUserStatusDto } from "./dto/create-user-status.dto";
import { UpdateUserStatusDto } from "./dto/update-user-status.dto";
import { InjectRepository } from "@nestjs/typeorm";
import UserStatusEntity from "./entities/user-status.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserStatusService {
  constructor(
    @InjectRepository(UserStatusEntity)
    private repository: Repository<UserStatusEntity>
  ) {}
  create(dto: CreateUserStatusDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} userStatus`;
  }

  update(id: number, updateUserStatusDto: UpdateUserStatusDto) {
    return `This action updates a #${id} userStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} userStatus`;
  }
}
