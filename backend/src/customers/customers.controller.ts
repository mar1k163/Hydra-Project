import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { UserId } from "src/decorators/user-id.decorator";
import { request } from "http";

@Controller("customers")
@UseGuards(JwtAuthGuard)
@ApiTags("customers")
@ApiBearerAuth()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(
    @Body() createCustomerDto: CreateCustomerDto,
    @UserId() userId: number
  ) {
    return this.customersService.create(createCustomerDto, userId);
  }

  @Get("/all")
  findAll() {
    return this.customersService.findAll();
  }

  @Get()
  getCustByUserId(@UserId() userId: number) {
    return this.customersService.findByUserId(userId);
  }

  @Get(":id")
  getCustById(@UserId() userId: number, @Param("id") id: string) {
    return this.customersService.findById(userId, +id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }
}
