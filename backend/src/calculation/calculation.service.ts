import { Injectable } from "@nestjs/common";
import { CreateCalculationDto } from "./dto/create-calculation.dto";
import { UpdateCalculationDto } from "./dto/update-calculation.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CalculationEntity } from "./entities/calculation.entity";

@Injectable()
export class CalculationService {
  constructor(
    @InjectRepository(CalculationEntity)
    private repository: Repository<CalculationEntity>
  ) {}

  create(dto: CreateCalculationDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository
      .createQueryBuilder("calculation")
      .where("calculation.cust = :id", { id })
      .getOne();
  }

  findOne(id: number) {
    return `This action returns a #${id} boardsList`;
  }

  update(id: number, dto: UpdateCalculationDto) {
    return `This action updates a #${id} boardsList`;
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
