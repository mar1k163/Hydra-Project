import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { UserId } from "src/decorators/user-id.decorator";

@Controller("customers")
@UseGuards(JwtAuthGuard)
@ApiTags("customers")
@ApiBearerAuth()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@UserId() userId: number) {
    return this.customersService.create(userId);
  }

  @Get("/all")
  findAll() {
    return this.customersService.findAll();
  }

  @Get()
  getCustById(@UserId() userId: number) {
    return this.customersService.findById(userId);
  }
}
