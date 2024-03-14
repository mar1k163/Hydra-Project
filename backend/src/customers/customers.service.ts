import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomersEntity } from "./entities/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private repository: Repository<CustomersEntity>
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.repository.save(createCustomerDto);
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
