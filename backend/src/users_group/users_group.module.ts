import { Module } from '@nestjs/common';
import { UsersGroupService } from './users_group.service';
import { UsersGroupController } from './users_group.controller';

@Module({
  controllers: [UsersGroupController],
  providers: [UsersGroupService],
})
export class UsersGroupModule {}
