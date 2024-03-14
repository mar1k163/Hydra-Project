import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculationStateService } from './calculation_state.service';
import { CreateCalculationStateDto } from './dto/create-calculation_state.dto';
import { UpdateCalculationStateDto } from './dto/update-calculation_state.dto';

@Controller('calculation-state')
export class CalculationStateController {
  constructor(private readonly calculationStateService: CalculationStateService) {}

  @Post()
  create(@Body() createCalculationStateDto: CreateCalculationStateDto) {
    return this.calculationStateService.create(createCalculationStateDto);
  }

  @Get()
  findAll() {
    return this.calculationStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculationStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalculationStateDto: UpdateCalculationStateDto) {
    return this.calculationStateService.update(+id, updateCalculationStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calculationStateService.remove(+id);
  }
}
