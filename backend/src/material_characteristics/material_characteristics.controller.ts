import { Controller, Post, Body } from '@nestjs/common';
import { MaterialCharacteristicsService } from './material_characteristics.service';
import { MaterialCharacteristicsDTO } from './dto/material_characteristics.dto';

@Controller('material-characteristics')
export class MaterialCharacteristicsController {
  constructor(private readonly materialCharacteristicsService: MaterialCharacteristicsService) {}

  @Post()
  async create(@Body() characteristicsData: MaterialCharacteristicsDTO) {
    return this.materialCharacteristicsService.create(characteristicsData);
  }
}
