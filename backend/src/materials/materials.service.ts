import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materials } from './entity/materials.entity';
import { MaterialsDTO } from './dto/materials.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Materials)
    private materialsRepository: Repository<Materials>,
  ) {}

  async create(materialDto: MaterialsDTO): Promise<Materials> {
    const material = this.materialsRepository.create(materialDto);
    return await this.materialsRepository.save(material);
  }
}
