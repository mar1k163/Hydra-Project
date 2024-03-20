import { OpeningsInFrame } from "src/openings_in_frame/entity/openings_in_frame.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("opening")
export class Opening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column("float")
  width: number;

  @Column("float")
  height: number;

  @OneToMany((type) => OpeningsInFrame, (inframe) => inframe.openings)
  inframe: OpeningsInFrame[];
}
