import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StructuralFrameElement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    results_id: number;

    @Column()
    amount_floor: number;

    @Column()
    floor_number: number;

    @Column()
    floor_height: number;

    @Column({ type: 'float' })
    perimeter_of_external_walls: number;
}
