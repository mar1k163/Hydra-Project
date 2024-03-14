import { Injectable } from '@nestjs/common';
import { CreateStructuralElementBasementDto } from './dto/create-structural_element_basement.dto';
import { UpdateStructuralElementBasementDto } from './dto/update-structural_element_basement.dto';

@Injectable()
export class StructuralElementBasementService {
  create(createStructuralElementBasementDto: CreateStructuralElementBasementDto) {
    return 'This action adds a new structuralElementBasement';
  }

  findAll() {
    return `This action returns all structuralElementBasement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} structuralElementBasement`;
  }

  update(id: number, updateStructuralElementBasementDto: UpdateStructuralElementBasementDto) {
    return `This action updates a #${id} structuralElementBasement`;
  }

  remove(id: number) {
    return `This action removes a #${id} structuralElementBasement`;
  }
}
