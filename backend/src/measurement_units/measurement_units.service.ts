import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeasurementUnits } from './entity/measurement_units.entity';
import { MeasurementUnitsDTO } from './dto/measurement_units.dto';

@Injectable()
export class MeasurementUnitsService {
  constructor(
    @InjectRepository(MeasurementUnits)
    private readonly measurementUnitsRepository: Repository<MeasurementUnits>,
  ) {}

  async create(measurementUnitsData: MeasurementUnitsDTO): Promise<MeasurementUnits> {
    return this.measurementUnitsRepository.save(measurementUnitsData);
  }
}
