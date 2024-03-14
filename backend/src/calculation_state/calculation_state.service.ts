import { Injectable } from '@nestjs/common';
import { CreateCalculationStateDto } from './dto/create-calculation_state.dto';
import { UpdateCalculationStateDto } from './dto/update-calculation_state.dto';

@Injectable()
export class CalculationStateService {
  create(createCalculationStateDto: CreateCalculationStateDto) {
    return 'This action adds a new calculationState';
  }

  findAll() {
    return `This action returns all calculationState`;
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
