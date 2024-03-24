import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MeasurementUnitsService } from './measurement_units.service';
import { MeasurementUnits } from './entity/measurement_units.entity';
import { MeasurementUnitsDTO } from './dto/measurement_units.dto';

@Controller('measurement_units')
export class MeasurementUnitsController {
  constructor(private readonly measurementUnitsService: MeasurementUnitsService) {}

  @Get()
  async getAllMeasurementUnits(): Promise<MeasurementUnits[]> {
    return this.measurementUnitsService.findAll();
  }

  @Get(':id')
  async getMeasurementUnitById(@Param('id') id: number): Promise<MeasurementUnits> {
    return this.measurementUnitsService.findById(id);
  }

  @Post()
  async createMeasurementUnit(@Body() createMeasurementUnitDto: MeasurementUnitsDTO): Promise<MeasurementUnits> {
    return this.measurementUnitsService.create(createMeasurementUnitDto);
  }
}
