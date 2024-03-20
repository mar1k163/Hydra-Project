import { Controller, Post, Body } from '@nestjs/common';
import { MeasurementUnitsService } from './measurement_units.service';
import { MeasurementUnitsDTO } from './dto/measurement_units.dto';

@Controller('measurement-units')
export class MeasurementUnitsController {
  constructor(private readonly measurementUnitsService: MeasurementUnitsService) {}

  @Post()
  async create(@Body() measurementUnitsData: MeasurementUnitsDTO) {
    return this.measurementUnitsService.create(measurementUnitsData);
  }
}
