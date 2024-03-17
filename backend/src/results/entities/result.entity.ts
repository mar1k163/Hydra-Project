import { CalculationEntity } from "src/calculation/entities/calculation.entity";
import { BasementEntity } from "src/structural_element_basement/entities/structural_element_basement.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany((type) => CalculationEntity, (calc) => calc.res)
  calc: CalculationEntity[];

  @OneToMany((type) => BasementEntity, (base) => base.res)
  base: BasementEntity[];
}
