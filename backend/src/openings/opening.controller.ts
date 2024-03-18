import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OpeningService } from './opening.service';
import { OpeningCreateDTO } from './dto/opening-create.dto';
import { OpeningUpdateDTO } from './dto/onening-update.dto';

@Controller('openings')
export class OpeningController {
  constructor(private readonly openingService: OpeningService) {}

  @Post()
  async create(@Body() createDto: OpeningCreateDTO) {
    return this.openingService.create(createDto);
  }

  @Get()
  async findAll() {
    return this.openingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.openingService.findOne(parseInt(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: OpeningUpdateDTO) {
    return this.openingService.update(parseInt(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.openingService.remove(parseInt(id));
  }
}
