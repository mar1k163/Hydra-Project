import { ApiProperty } from "@nestjs/swagger";

export class CreateStructuralElementBasementDto {
  @ApiProperty({ default: "150" })
  perimeter_of_external_walls: number;

  @ApiProperty({ default: "23" })
  internal_wall_length: number;

  @ApiProperty({ default: "???" })
  concrete_piles: string;

  @ApiProperty({ default: "NormBeton" })
  concrete: string;
}
