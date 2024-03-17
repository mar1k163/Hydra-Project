import { PartialType } from '@nestjs/swagger';
import { CreateUserUsergroupDto } from './create-user_usergroup.dto';

export class UpdateUserUsergroupDto extends PartialType(CreateUserUsergroupDto) {}
