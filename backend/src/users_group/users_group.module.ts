import { Module } from "@nestjs/common";
import { UsersGroupService } from "./users_group.service";
import { UsersGroupController } from "./users_group.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersGroupEntity } from "./entities/users_group.entity";

@Module({
  controllers: [UsersGroupController],
  providers: [UsersGroupService],
  imports: [TypeOrmModule.forFeature([UsersGroupEntity])],
  exports: [UsersGroupService],
})
export class UsersGroupModule {}
