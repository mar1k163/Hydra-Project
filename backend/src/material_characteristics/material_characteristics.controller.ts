import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MaterialCharacteristicsService } from './material_characteristics.service';
import { MaterialCharacteristics } from './entity/material_characteristics.entity';
import { MaterialCharacteristicsDTO } from './dto/material_characteristics.dto';

@Controller('material_characteristics')
export class MaterialCharacteristicsController {
  constructor(private readonly materialCharacteristicsService: MaterialCharacteristicsService) {}

  @Get()
  async getAllMaterialCharacteristics(): Promise<MaterialCharacteristics[]> {
    return this.materialCharacteristicsService.findAll();
  }

  @Get(':id')
  async getMaterialCharacteristicsById(@Param('id') id: number): Promise<MaterialCharacteristics> {
    return this.materialCharacteristicsService.findById(id);
  }

  @Post()
  async createMaterialCharacteristics(@Body() materialCharacteristicsDto: MaterialCharacteristicsDTO): Promise<MaterialCharacteristics> {
    return this.materialCharacteristicsService.create(materialCharacteristicsDto);
  }
}
