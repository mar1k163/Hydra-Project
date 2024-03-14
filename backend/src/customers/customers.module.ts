import { Module } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CustomersController } from "./customers.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomersEntity } from "./entities/customer.entity";

@Module({
  controllers: [CustomersController],
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
