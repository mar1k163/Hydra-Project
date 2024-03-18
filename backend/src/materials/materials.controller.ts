import { Controller, Post, Body } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsDTO } from './dto/materials.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  async create(@Body() materialsData: MaterialsDTO) {
    return this.materialsService.create(materialsData);
  }
}
