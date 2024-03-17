import { Module } from "@nestjs/common";
import { CalculationStateService } from "./calculation_state.service";
import { CalculationStateController } from "./calculation_state.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CalculationStateEntity } from "./entities/calculation_state.entity";

@Module({
  controllers: [CalculationStateController],
  providers: [CalculationStateService],
  imports: [TypeOrmModule.forFeature([CalculationStateEntity])],
  exports: [CalculationStateService],
})
export class CalculationStateModule {}
