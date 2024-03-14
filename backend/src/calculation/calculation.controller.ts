import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculationService } from './calculation.service';
import { CreateCalculationDto } from './dto/create-calculation.dto';
import { UpdateCalculationDto } from './dto/update-calculation.dto';

@Controller('calculation')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalculationDto: UpdateCalculationDto) {
    return this.calculationService.update(+id, updateCalculationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calculationService.remove(+id);
  }
}
