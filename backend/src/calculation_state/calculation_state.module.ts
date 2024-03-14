import { Module } from '@nestjs/common';
import { CalculationStateService } from './calculation_state.service';
import { CalculationStateController } from './calculation_state.controller';

@Module({
  controllers: [CalculationStateController],
  providers: [CalculationStateService],
})
export class CalculationStateModule {}
