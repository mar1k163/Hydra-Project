import { ApiProperty } from "@nestjs/swagger";
import { ResultsEntity } from "src/results/entities/result.entity";

export class FrameCalculationDto {
  @ApiProperty({
    default: "1",
  })
  results: ResultsEntity;

  @ApiProperty({
    default: "10",
  })
  amount_floor: number;

  @ApiProperty({
    default: "10",
  })
  floor_number: number;

  @ApiProperty({
    default: "10",
  })
  floor_height: number;

  @ApiProperty({
    default: "10",
  })
  perimeter_of_external_walls: number;

  @ApiProperty({
    default: "10",
  })
  base_area: number;

  @ApiProperty({
    default: "10",
  })
  external_wall_thickness: number;

  @ApiProperty({
    default: "10",
  })
  internal_wall_length: number;

  @ApiProperty({
    default: "10",
  })
  internal_wall_thickness: number;

  @ApiProperty({
    default: "dada",
  })
  OSB_external_wall: string;

  @ApiProperty({
    default: "dada",
  })
  steam_waterproofing_external_wall: string;

  @ApiProperty({
    default: "dada",
  })
  windscreen_external_wall: string;

  @ApiProperty({
    default: "dada",
  })
  insulation_external_wall: string;

  @ApiProperty({
    default: "dada",
  })
  overlap_thickness: string;

  @ApiProperty({
    default: "dada",
  })
  OSB_thickness: string;

  @ApiProperty({
    default: "dada",
  })
  steam_waterproofing_thickness: string;

  @ApiProperty({
    default: "dada",
  })
  windscreen_thickness: string;

  @ApiProperty({
    default: "dada",
  })
  insulation_thickness: string;

  @ApiProperty({
    default: "dada",
  })
  OSB_internal_wal: string;
}
