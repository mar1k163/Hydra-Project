import { ApiProperty } from "@nestjs/swagger";

export class CreateUserStatusDto {
  @ApiProperty({
    default: "числится в штате",
  })
  status_name: string;
}
