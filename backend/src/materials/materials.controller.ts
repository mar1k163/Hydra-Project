import { Controller, Post, Body } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsDTO } from './dto/materials.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  async createMaterial(@Body() materialDto: MaterialsDTO): Promise<any> {
    return this.materialsService.create(materialDto);
  }
}
