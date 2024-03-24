import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeasurementUnits } from './entity/measurement_units.entity';
import { MeasurementUnitsDTO } from './dto/measurement_units.dto';

@Injectable()
export class MeasurementUnitsService {
  constructor(
    @InjectRepository(MeasurementUnits)
    private measurementUnitsRepository: Repository<MeasurementUnits>,
  ) {}

  async findAll(): Promise<MeasurementUnits[]> {
    return this.measurementUnitsRepository.find();
  }

  async findById(id: number): Promise<MeasurementUnits> {
    return this.measurementUnitsRepository.findOne({ where: { id } });
  }

  async create(createMeasurementUnitDto: MeasurementUnitsDTO): Promise<MeasurementUnits> {
    const measurementUnit = this.measurementUnitsRepository.create(createMeasurementUnitDto);
    return this.measurementUnitsRepository.save(measurementUnit);
  }
}
