import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    default: "test@test.ru",
  })
  email: string;

  @ApiProperty({
    default: "djvan",
  })
  fullName: string;

  @ApiProperty({
    default: "123",
  })
  password: string;
}
