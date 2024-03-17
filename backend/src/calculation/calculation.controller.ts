import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CalculationService } from "./calculation.service";
import { CreateCalculationDto } from "./dto/create-calculation.dto";
import { UpdateCalculationDto } from "./dto/update-calculation.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("calculation")
@ApiTags("calculation")
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @Post()
  create(@Body() createCalculationDto: CreateCalculationDto) {
    return this.calculationService.create(createCalculationDto);
  }

  @Get()
  findAll() {
    return this.calculationService.findAll();
  }
}
