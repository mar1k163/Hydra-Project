import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materials } from './entity/materials.entity';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Materials])],
  providers: [MaterialsService],
  controllers: [MaterialsController],
})
export class MaterialsModule {}
