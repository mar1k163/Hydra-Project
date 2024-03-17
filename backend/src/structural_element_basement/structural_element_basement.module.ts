import { Module } from "@nestjs/common";
import { StructuralElementBasementService } from "./structural_element_basement.service";
import { StructuralElementBasementController } from "./structural_element_basement.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BasementEntity } from "./entities/structural_element_basement.entity";

@Module({
  controllers: [StructuralElementBasementController],
  providers: [StructuralElementBasementService],
  imports: [TypeOrmModule.forFeature([BasementEntity])],
  exports: [StructuralElementBasementService],
})
export class StructuralElementBasementModule {}
