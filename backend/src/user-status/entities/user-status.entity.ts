import { UserEntity } from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

export type UserStatus = "числится в штате" | "уволен";

@Entity("user_status")
export class UserStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_name: string;

  @OneToMany(() => UserEntity, (user) => user.status)
  user: UserEntity;
}
export default UserStatusEntity;
