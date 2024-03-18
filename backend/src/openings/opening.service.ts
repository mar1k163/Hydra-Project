import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Opening } from './entity/opening.entity';
import { OpeningCreateDTO } from './dto/opening-create.dto';
import { OpeningUpdateDTO } from './dto/onening-update.dto';

@Injectable()
export class OpeningService {
  constructor(
    @InjectRepository(Opening)
    private readonly openingRepository: Repository<Opening>,
  ) {}

  async create(createDto: OpeningCreateDTO) {
    return this.openingRepository.save(createDto);
  }

  async findAll() {
    return this.openingRepository.find();
  }

  async findOne(id: number) {
	return this.openingRepository.findOne({ where: { id } });
  }  

  async update(id: number, updateDto: OpeningUpdateDTO) {
    await this.openingRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.openingRepository.delete(id);
    return { deleted: true };
  }
}
