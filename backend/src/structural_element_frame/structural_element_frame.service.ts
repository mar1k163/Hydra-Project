// structural_element_frame.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StructuralElementFrame } from './entity/structural_element_frame.entity';
import { StructuralElementFrameDTO } from './dto/structural_element_frame.dto';

@Injectable()
export class StructuralElementFrameService {
  constructor(
    @InjectRepository(StructuralElementFrame)
    private readonly structuralElementFrameRepository: Repository<StructuralElementFrame>,
  ) {}

  async create(frameData: StructuralElementFrameDTO): Promise<StructuralElementFrame> {
    return this.structuralElementFrameRepository.save(frameData);
  }
}
