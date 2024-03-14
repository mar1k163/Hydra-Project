import { ApiProperty } from "@nestjs/swagger";
import { CustomersEntity } from "src/customers/entities/customer.entity";
import UserStatusEntity from "src/user-status/entities/user-status.entity";

export class CreateUserDto {
  @ApiProperty({
    default: "test@test.ru",
  })
  email: string;

  @ApiProperty({
    default: "djvan2",
  })
  last_name: string;

  @ApiProperty({
    default: "djvan1",
  })
  first_name: string;

  @ApiProperty({
    default: "djvan3",
  })
  second_name: string;

  @ApiProperty({
    default: "88888",
  })
  phone: number;

  @ApiProperty({
    default: "dj",
  })
  login: string;

  @ApiProperty({
    default: "123",
  })
  password: string;

  @ApiProperty({
    default: "1",
  })
  status: UserStatusEntity[];

  @ApiProperty({
    default: "1",
  })
  customers: CustomersEntity[];
}
