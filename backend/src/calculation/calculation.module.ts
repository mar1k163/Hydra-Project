import { Module } from "@nestjs/common";
import { CalculationService } from "./calculation.service";
import { CalculationController } from "./calculation.controller";
import { CalculationEntity } from "./entities/calculation.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [CalculationController],
  providers: [CalculationService],
  imports: [TypeOrmModule.forFeature([CalculationEntity])],
  exports: [CalculationService],
})
export class CalculationModule {}
