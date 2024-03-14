import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users_group")
export class UsersGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  title: number;
}
