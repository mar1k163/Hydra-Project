import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { StructuralElementFrame } from "src/structural_element_frame/entity/structural_element_frame.entity";
import { Opening } from "src/openings/entity/opening.entity";

@Entity("openings-in-frame")
export class OpeningsInFrame {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StructuralElementFrame)
  structural_element_frame: StructuralElementFrame;

  @ManyToOne((type) => Opening, (openings) => openings.inframe)
  openings: Opening;

  @Column()
  amount: number;
}
