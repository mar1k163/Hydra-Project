import { CalculationEntity } from "src/calculation/entities/calculation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("calculation_state")
export class CalculationStateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @OneToMany(() => CalculationEntity, (calc) => calc.state)
  calc: CalculationEntity;
}
