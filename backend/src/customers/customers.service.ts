import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomersEntity } from "./entities/customer.entity";
import { Repository } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private repository: Repository<CustomersEntity>
  ) {}

  create(userId: number) {
    return this.repository.save({
      firstname: "dan4ik",
      lastname: "makarov",
      secondname: "nikitich",
      phone: 7812,
      email: "den@mail.com",
      addres: "cucuruznaya 17b",
      user: { id: userId },
    });
  }

  findById(userId: number) {
    const qb = this.repository.createQueryBuilder("file");

    qb.where("file.userId = :userId", { userId });
    return qb.getMany();
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
