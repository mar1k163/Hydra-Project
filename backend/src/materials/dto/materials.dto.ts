import { ApiProperty } from "@nestjs/swagger";

export class CreateMaterialDto {
  @ApiProperty({
    default: "Название материала",
  })
  name: string;

  @ApiProperty({
    default: "м3",
  })
  unit: string;

  @ApiProperty({
    default: 12000,
  })
  pricePerUnit: number;
}
