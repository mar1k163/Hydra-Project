import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StructuralElementFrame } from './entity/structural_element_frame.entity';
import { StructuralElementFrameService } from './structural_element_frame.service';
import { StructuralElementFrameController } from './structural_element_frame.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StructuralElementFrame])],
  providers: [StructuralElementFrameService],
  controllers: [StructuralElementFrameController],
})
export class StructuralElementFrameModule {}
