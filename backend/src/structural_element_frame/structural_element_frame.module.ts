import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StructuralElementFrame } from './entity/structural_element_frame.entity';
import { FrameCalculationService } from './structural_element_frame.service';
import { FrameCalculationController } from './structural_element_frame.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StructuralElementFrame])],
  providers: [FrameCalculationService],
  controllers: [FrameCalculationController],
})
export class StructuralElementFrameModule {}
