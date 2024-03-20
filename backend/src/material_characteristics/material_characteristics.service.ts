import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialCharacteristics } from './entity/material_characteristics.entity';
import { MaterialCharacteristicsDTO } from './dto/material_characteristics.dto';

@Injectable()
export class MaterialCharacteristicsService {
  constructor(
    @InjectRepository(MaterialCharacteristics)
    private readonly materialCharacteristicsRepository: Repository<MaterialCharacteristics>,
  ) {}

  async create(characteristicsData: MaterialCharacteristicsDTO): Promise<MaterialCharacteristics> {
    return this.materialCharacteristicsRepository.save(characteristicsData);
  }
}
