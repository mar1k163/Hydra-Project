import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ) {}

  async findById(id) {
    return this.repository.findOneBy({ id });
  }
  async findByLogin(login) {
    return this.repository.findOneBy({ login });
  }

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  update(id: number, dto: UpdateUserDto) {
    return `This action updates a #${id} boardsList`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardsList`;
  }
}
