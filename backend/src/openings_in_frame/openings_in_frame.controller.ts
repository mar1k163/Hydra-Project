import { Controller, Post, Body } from '@nestjs/common';
import { OpeningsInFrameService } from './openings_in_frame.service';
import { OpeningsInFrameDTO } from './dto/openings_in_frame.dto';

@Controller('openings-in-frame')
export class OpeningsInFrameController {
  constructor(private readonly openingsInFrameService: OpeningsInFrameService) {}

  @Post()
  async create(@Body() openingsInFrameData: OpeningsInFrameDTO) {
    return this.openingsInFrameService.create(openingsInFrameData);
  }
}
