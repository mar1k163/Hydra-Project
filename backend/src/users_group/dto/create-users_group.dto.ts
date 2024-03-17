import { ApiProperty } from "@nestjs/swagger";

export class CreateUsersGroupDto {
  @ApiProperty({ default: "title" })
  title: string;
}
