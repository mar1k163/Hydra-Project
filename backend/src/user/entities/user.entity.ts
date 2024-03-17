import { CustomersEntity } from "src/customers/entities/customer.entity";
import { UserStatusEntity } from "src/user-status/entities/user-status.entity";
import { UserUsergroupEntity } from "src/user_usergroup/entities/user_usergroup.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  last_name: string;

  @Column("varchar", { length: 100 })
  first_name: string;

  @Column("varchar", { length: 100 })
  second_name: string;

  @Column("int")
  phone: number;

  @Column("varchar", { length: 100 })
  email: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @ManyToOne((type) => UserStatusEntity, (status_name) => status_name.user)
  @JoinColumn({ name: "status" })
  status: UserStatusEntity[];

  @OneToMany((type) => CustomersEntity, (cust) => cust.user)
  @JoinColumn({ name: "Customer_id" })
  customers: CustomersEntity[];

  @OneToMany((type) => UserUsergroupEntity, (ugu) => ugu.user)
  ugu: UserUsergroupEntity[];
}
