import { ApiProperty } from "@nestjs/swagger";

export class CreateCalculationDto {
  @ApiProperty({
    default: "г. Самара ул. Мира д.12",
  })
  addres_object_constractions: string;

  @ApiProperty({
    default: "12144",
  })
  number: number;

  @ApiProperty({
    default: "2023-03-02",
  })
  created_date: string;
}
