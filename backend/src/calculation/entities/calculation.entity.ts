import { CalculationStateEntity } from "src/calculation_state/entities/calculation_state.entity";
import { CustomersEntity } from "src/customers/entities/customer.entity";
import { ResultsEntity } from "src/results/entities/result.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("calculation")
export class CalculationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addres_object_constractions: string;

  @Column("int")
  number: number;

  @Column("date")
  created_date: string;

  @ManyToOne(() => CalculationStateEntity, (state) => state.calc)
  @JoinColumn({ name: "state" })
  state: CalculationStateEntity[];

  @ManyToOne(() => CustomersEntity, (cust) => cust.calc)
  @JoinColumn({ name: "customers" })
  cust: CustomersEntity[];

  @ManyToOne((type) => ResultsEntity, (res) => res.calc)
  res: ResultsEntity[];
}
