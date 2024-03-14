import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("results")
export class ResultsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  material: string;

  @Column("int")
  amount: number;

  @Column("float")
  price: number;

  @Column()
  measurement_unit: string;

  @Column("float")
  full_price: number;
}
