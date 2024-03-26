import { ApiProperty } from "@nestjs/swagger";

export class FrameCalculationDto {
  @ApiProperty({
    default: 180,
  })
  externalWallArea: number;

  @ApiProperty({
    default: 90,
  })
  internalWallArea: number;
}
