import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpeningsInFrame } from './entity/openings_in_frame.entity';
import { OpeningsInFrameDTO } from './dto/openings_in_frame.dto';

@Injectable()
export class OpeningsInFrameService {
  constructor(
    @InjectRepository(OpeningsInFrame)
    private readonly openingsInFrameRepository: Repository<OpeningsInFrame>,
  ) {}

  async create(openingsInFrameData: OpeningsInFrameDTO): Promise<OpeningsInFrame> {
    return this.openingsInFrameRepository.save(openingsInFrameData);
  }
}
