import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StructuralElementBasementService } from './structural_element_basement.service';
import { CreateStructuralElementBasementDto } from './dto/create-structural_element_basement.dto';
import { UpdateStructuralElementBasementDto } from './dto/update-structural_element_basement.dto';

@Controller('structural-element-basement')
export class StructuralElementBasementController {
  constructor(private readonly structuralElementBasementService: StructuralElementBasementService) {}

  @Post()
  create(@Body() createStructuralElementBasementDto: CreateStructuralElementBasementDto) {
    return this.structuralElementBasementService.create(createStructuralElementBasementDto);
  }

  @Get()
  findAll() {
    return this.structuralElementBasementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.structuralElementBasementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStructuralElementBasementDto: UpdateStructuralElementBasementDto) {
    return this.structuralElementBasementService.update(+id, updateStructuralElementBasementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.structuralElementBasementService.remove(+id);
  }
}
