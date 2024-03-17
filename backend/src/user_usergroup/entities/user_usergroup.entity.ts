import { UserEntity } from "src/user/entities/user.entity";
import { UsersGroupEntity } from "src/users_group/entities/users_group.entity";
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user-usergroup")
export class UserUsergroupEntity {
  @PrimaryGeneratedColumn()
  @ManyToOne((type) => UserEntity, (user) => user.ugu)
  user: UserEntity[];

  @ManyToOne((type) => UsersGroupEntity, (group) => group.ugu)
  group: UsersGroupEntity[];
}
