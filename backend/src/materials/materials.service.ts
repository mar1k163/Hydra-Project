import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materials } from './entity/materials.entity';
import { MaterialsDTO } from './dto/materials.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Materials)
    private readonly materialsRepository: Repository<Materials>,
  ) {}

  async create(materialsData: MaterialsDTO): Promise<Materials> {
    return this.materialsRepository.save(materialsData);
  }
}
