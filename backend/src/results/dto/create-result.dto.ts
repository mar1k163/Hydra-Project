import { ApiProperty } from "@nestjs/swagger";

export class CreateResultDto {
  @ApiProperty({
    default: "камень",
  })
  material: string;

  @ApiProperty({
    default: "3",
  })
  amount: number;

  @ApiProperty({
    default: "150000",
  })
  price: number;

  @ApiProperty({
    default: "тонны",
  })
  measurement_unit: string;

  @ApiProperty({
    default: "450000",
  })
  full_price: number;
}
