import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CalculationStateService } from "./calculation_state.service";
import { CreateCalculationStateDto } from "./dto/create-calculation_state.dto";
import { UpdateCalculationStateDto } from "./dto/update-calculation_state.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("calculation-state")
@ApiTags("calculation-state")
export class CalculationStateController {
  constructor(
    private readonly calculationStateService: CalculationStateService
  ) {}

  @Post()
  create(@Body() createCalculationStateDto: CreateCalculationStateDto) {
    return this.calculationStateService.create(createCalculationStateDto);
  }

  @Get()
  findAll() {
    return this.calculationStateService.findAll();
  }
}
