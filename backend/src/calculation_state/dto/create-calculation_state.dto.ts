import { ApiProperty } from "@nestjs/swagger";

export class CreateCalculationStateDto {
  @ApiProperty({
    default: "актуален",
  })
  state: string;
}
