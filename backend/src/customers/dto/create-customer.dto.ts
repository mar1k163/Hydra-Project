import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "src/user/entities/user.entity";

export class CreateCustomerDto {
  @ApiProperty({
    default: "test@test.ru",
  })
  email: string;

  @ApiProperty({
    default: "djvan2",
  })
  lastname: string;

  @ApiProperty({
    default: "djvan1",
  })
  firstname: string;

  @ApiProperty({
    default: "djvan3",
  })
  secondname: string;

  @ApiProperty({
    default: "88888",
  })
  phone: number;

  @ApiProperty({
    default: "88888",
  })
  addres: string;

  @ApiProperty({
    default: "1",
  })
  userId: UserEntity;
}
