import { Controller, Post, Body } from '@nestjs/common';
import { FrameCalculationDto } from './dto/structural_element_frame.dto';
import { FrameCalculationService } from './structural_element_frame.service';

@Controller('frame')
export class FrameCalculationController {
  constructor(private readonly frameCalculationService: FrameCalculationService) {}

  @Post('calculate-first-floor')
  calculateForFirstFloor(@Body() frameCalculationDto: FrameCalculationDto): any {
    return this.frameCalculationService.calculateForFirstFloor(frameCalculationDto);
  }
}
