import { ResultsEntity } from "src/results/entities/result.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("structural_element_basement")
export class BasementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("float")
  perimeter_of_external_walls: number; //периметр внешних стен

  @Column("float")
  internal_wall_length: number; //длинна внутренних стен

  @Column()
  concrete_piles: string; //бетонные сваи

  @Column()
  concrete: string; //бетон

  @ManyToOne((type) => ResultsEntity, (res) => res.calc)
  res: ResultsEntity[];
}
