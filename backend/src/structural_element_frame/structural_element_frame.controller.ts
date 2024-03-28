import { Controller, Post, Body, Get } from "@nestjs/common";
import { FrameCalculationDto } from "./dto/structural_element_frame.dto";
import { FrameCalculationService } from "./structural_element_frame.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("frame")
@ApiTags("frame")
export class FrameCalculationController {
  constructor(
    private readonly frameCalculationService: FrameCalculationService
  ) {}

  @Post("calculate-first-floor")
  create(@Body() frameCalculationDto: FrameCalculationDto) {
    return this.frameCalculationService.create(frameCalculationDto);
  }

  @Get()
  findAll() {
    return this.frameCalculationService.findAll();
  }
}
