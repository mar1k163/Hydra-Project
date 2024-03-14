import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("calculation_state")
export class CalculationStateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;
}
