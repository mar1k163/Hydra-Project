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

  create(dto: CreateCustomerDto, userId: number): Promise<CustomersEntity> {
    const { firstname, lastname, secondname, phone, email, addres } = dto;
    const newCustomer = new CustomersEntity();
    newCustomer.firstname = firstname;
    newCustomer.lastname = lastname;
    newCustomer.secondname = secondname;
    newCustomer.addres = addres;
    newCustomer.phone = phone;
    newCustomer.email = email;
    newCustomer.user = { id: userId } as any;

    return this.repository.save(newCustomer);
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
    const { firstname, lastname, secondname, phone, email, addres } =
      updateCustomerDto;
    const newCustomer = new CustomersEntity();
    newCustomer.firstname = firstname;
    newCustomer.lastname = lastname;
    newCustomer.secondname = secondname;
    newCustomer.addres = addres;
    newCustomer.phone = phone;
    newCustomer.email = email;
    return this.repository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
