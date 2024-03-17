import { Injectable } from "@nestjs/common";
import { CreateStructuralElementBasementDto } from "./dto/create-structural_element_basement.dto";
import { UpdateStructuralElementBasementDto } from "./dto/update-structural_element_basement.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseEntity, Repository } from "typeorm";
import { BasementEntity } from "./entities/structural_element_basement.entity";

@Injectable()
export class StructuralElementBasementService {
  constructor(
    @InjectRepository(BasementEntity)
    private repository: Repository<BasementEntity>
  ) {}

  create(dto: CreateStructuralElementBasementDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} structuralElementBasement`;
  }

  update(
    id: number,
    updateStructuralElementBasementDto: UpdateStructuralElementBasementDto
  ) {
    return `This action updates a #${id} structuralElementBasement`;
  }

  remove(id: number) {
    return `This action removes a #${id} structuralElementBasement`;
  }
}
