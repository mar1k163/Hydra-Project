import { Module } from "@nestjs/common";
import { UserStatusService } from "./user-status.service";
import { UserStatusController } from "./user-status.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserStatusEntity from "./entities/user-status.entity";

@Module({
  controllers: [UserStatusController],
  imports: [TypeOrmModule.forFeature([UserStatusEntity])],
  providers: [UserStatusService],
  exports: [UserStatusService],
})
export class UserStatusModule {}
