import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("calculation")
export class CalculationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addres_object_constractions: string;

  @Column("int")
  number: number;

  @Column("date")
  created_date: number;
}
