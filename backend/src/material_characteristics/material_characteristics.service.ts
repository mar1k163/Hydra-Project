import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialCharacteristics } from './entity/material_characteristics.entity';
import { MaterialCharacteristicsDTO } from './dto/material_characteristics.dto';

@Injectable()
export class MaterialCharacteristicsService {
  constructor(
    @InjectRepository(MaterialCharacteristics)
    private materialCharacteristicsRepository: Repository<MaterialCharacteristics>,
  ) {}

  async findAll(): Promise<MaterialCharacteristics[]> {
    return this.materialCharacteristicsRepository.find();
  }

  async findById(id: number): Promise<MaterialCharacteristics> {
    return this.materialCharacteristicsRepository.findOne({ where: { id } });
  }

  async create(materialCharacteristicsDto: MaterialCharacteristicsDTO): Promise<MaterialCharacteristics> {
    const materialCharacteristics = this.materialCharacteristicsRepository.create(materialCharacteristicsDto);
    return this.materialCharacteristicsRepository.save(materialCharacteristics);
  }
}
