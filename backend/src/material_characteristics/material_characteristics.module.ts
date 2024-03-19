import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialCharacteristics } from './entity/material_characteristics.entity';
import { MaterialCharacteristicsService } from './material_characteristics.service';
import { MaterialCharacteristicsController } from './material_characteristics.controller';
import { MeasurementUnits } from 'src/measurement_units/entity/measurement_units.entity';
import { Materials } from 'src/materials/entity/materials.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaterialCharacteristics, MeasurementUnits, Materials])],
  providers: [MaterialCharacteristicsService],
  controllers: [MaterialCharacteristicsController],
})
export class MaterialCharacteristicsModule {}
