import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCustomerDto } from "./create-customer.dto";

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
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
}
