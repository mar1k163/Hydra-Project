import { PartialType } from '@nestjs/swagger';
import { CreateCalculationStateDto } from './create-calculation_state.dto';

export class UpdateCalculationStateDto extends PartialType(CreateCalculationStateDto) {}
