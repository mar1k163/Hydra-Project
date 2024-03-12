import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Opening } from './opening.entity';
import { StructuralFrameElement } from './structural-frame-element.entity';

@Entity()
export class StructuralFrameOpening {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Opening)
    @JoinColumn({ name: "opening_id" })
    opening: Opening;

    @ManyToOne(() => StructuralFrameElement)
    @JoinColumn({ name: "structural_frame_element_id" })
    structuralFrameElement: StructuralFrameElement;
}
