import { Module } from "@nestjs/common";
import { UserUsergroupService } from "./user_usergroup.service";
import { UserUsergroupController } from "./user_usergroup.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserUsergroupEntity } from "./entities/user_usergroup.entity";

@Module({
  controllers: [UserUsergroupController],
  providers: [UserUsergroupService],
  imports: [TypeOrmModule.forFeature([UserUsergroupEntity])],
  exports: [UserUsergroupService],
})
export class UserUsergroupModule {}
