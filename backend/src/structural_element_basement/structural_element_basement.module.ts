import { Module } from '@nestjs/common';
import { StructuralElementBasementService } from './structural_element_basement.service';
import { StructuralElementBasementController } from './structural_element_basement.controller';

@Module({
  controllers: [StructuralElementBasementController],
  providers: [StructuralElementBasementService],
})
export class StructuralElementBasementModule {}
