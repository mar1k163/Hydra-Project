import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StructuralElementFrameEntity } from "./entity/structural_element_frame.entity";
import { FrameCalculationService } from "./structural_element_frame.service";
import { FrameCalculationController } from "./structural_element_frame.controller";

@Module({
  imports: [TypeOrmModule.forFeature([StructuralElementFrameEntity])],
  providers: [FrameCalculationService],
  controllers: [FrameCalculationController],
  exports: [FrameCalculationService],
})
export class StructuralElementFrameModule {}
