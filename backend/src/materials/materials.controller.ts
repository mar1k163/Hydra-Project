import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { Materials } from './entity/materials.entity';
import { MaterialsDTO } from './dto/materials.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  async getAllMaterials(): Promise<Materials[]> {
    return this.materialsService.findAll();
  }

  @Get(':id')
  async getMaterialById(@Param('id') id: number): Promise<Materials> {
    return this.materialsService.findById(id);
  }

  @Post()
  async createMaterial(@Body() materialDto: MaterialsDTO): Promise<Materials> {
    return this.materialsService.create(materialDto);
  }
}
