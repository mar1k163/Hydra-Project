import { Controller, Post, Body } from '@nestjs/common';
import { StructuralElementFrameService } from './structural_element_frame.service';
import { StructuralElementFrameDTO } from './dto/structural_element_frame.dto';

@Controller('structural-element-frame')
export class StructuralElementFrameController {
  constructor(private readonly frameService: StructuralElementFrameService) {}

  @Post()
  async create(@Body() frameData: StructuralElementFrameDTO) {
    return this.frameService.create(frameData);
  }
}
