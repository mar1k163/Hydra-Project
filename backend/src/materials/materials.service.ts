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

  async findAll(): Promise<Materials[]> {
    return this.materialsRepository.find();
  }

  async findById(id: number): Promise<Materials> {
    return this.materialsRepository.findOne({ where: { id } });
  }
  
  async create(materialDto: MaterialsDTO): Promise<Materials> {
    const material = this.materialsRepository.create(materialDto);
    return this.materialsRepository.save(material);
  }
}
