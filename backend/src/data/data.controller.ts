import { Controller, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { MaterialCharacteristics } from 'src/material_characteristics/entity/material_characteristics.entity';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post('material-characteristics')
  async createMaterialCharacteristics(@Body() data: Partial<MaterialCharacteristics>): Promise<MaterialCharacteristics> {
    return this.dataService.addMaterialCharacteristics(data);
  }
}
