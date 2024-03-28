import { Injectable } from "@nestjs/common";
import { FrameCalculationDto } from "./dto/structural_element_frame.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { StructuralElementFrameEntity } from "./entity/structural_element_frame.entity";
import { Repository } from "typeorm";

@Injectable()
export class FrameCalculationService {
  constructor(
    @InjectRepository(StructuralElementFrameEntity)
    private repository: Repository<StructuralElementFrameEntity>
  ) {}

  findAll() {
    return this.repository.find();
  }

  create(frameCalculationDto: FrameCalculationDto) {
    return this.repository.save(frameCalculationDto);
  }
}
