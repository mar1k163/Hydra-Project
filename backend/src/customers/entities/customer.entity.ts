import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export class CustomersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  lastname: string;

  @Column("varchar", { length: 100 })
  firstname: string;

  @Column("varchar", { length: 100 })
  secondname: string;

  @Column("int")
  phone: number;

  @Column("varchar", { length: 100 })
  email: string;

  @Column("varchar", { length: 100 })
  addres: string;

  @ManyToOne(() => UserEntity, (user) => user.customers)
  user: UserEntity;
}
