import { Injectable } from "@nestjs/common";
import { CreateCalculationStateDto } from "./dto/create-calculation_state.dto";
import { UpdateCalculationStateDto } from "./dto/update-calculation_state.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CalculationStateEntity } from "./entities/calculation_state.entity";

@Injectable()
export class CalculationStateService {
  constructor(
    @InjectRepository(CalculationStateEntity)
    private repository: Repository<CalculationStateEntity>
  ) {}

  create(createCalculationStateDto: CreateCalculationStateDto) {
    return this.repository.save(createCalculationStateDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} calculationState`;
  }

  update(id: number, updateCalculationStateDto: UpdateCalculationStateDto) {
    return `This action updates a #${id} calculationState`;
  }

  remove(id: number) {
    return `This action removes a #${id} calculationState`;
  }
}
