import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialCharacteristics } from 'src/material_characteristics/entity/material_characteristics.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(MaterialCharacteristics)
    private materialCharacteristicsRepository: Repository<MaterialCharacteristics>,
  ) {}

  async addMaterialCharacteristics(data: Partial<MaterialCharacteristics>): Promise<MaterialCharacteristics> {
    const newMaterialCharacteristics = this.materialCharacteristicsRepository.create(data);
    return await this.materialCharacteristicsRepository.save(newMaterialCharacteristics);
  }
}
