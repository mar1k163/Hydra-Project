import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { StructuralElementFrameEntity } from "src/structural_element_frame/entity/structural_element_frame.entity";
import { Opening } from "src/openings/entity/opening.entity";

@Entity("openings-in-frame")
export class OpeningsInFrame {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StructuralElementFrameEntity)
  structural_element_frame: StructuralElementFrameEntity;

  @ManyToOne((type) => Opening, (openings) => openings.inframe)
  openings: Opening;

  @Column()
  amount: number;
}
