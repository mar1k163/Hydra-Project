import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementUnits } from './entity/measurement_units.entity';
import { MeasurementUnitsService } from './measurement_units.service';
import { MeasurementUnitsController } from './measurement_units.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeasurementUnits])],
  providers: [MeasurementUnitsService],
  controllers: [MeasurementUnitsController],
})
export class MeasurementUnitsModule {}
