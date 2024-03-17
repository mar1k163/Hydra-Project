import { UserUsergroupEntity } from "src/user_usergroup/entities/user_usergroup.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users_group")
export class UsersGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  title: string;

  @OneToMany((type) => UserUsergroupEntity, (ugu) => ugu.group)
  ugu: UserUsergroupEntity[];
}
