import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StructuralFrameElement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    results_id: number;

    @Column({ type: 'float' })
    amount_floor: number;

    @Column()
    floor_number: number;

    @Column({ type: 'float' })
    floor_height: number;

    @Column({ type: 'float' })
    perimeter_of_external_walls: number;

    @Column({ type: 'float' })
    base_area: number;

    @Column({ type: 'float' })
    external_wall_thickness: number;

    @Column({ type: 'float' })
    internal_wall_length: number;

    @Column({ type: 'float' })
    internal_wall_thickness: number;

    @Column()
    OSB_external_wall: string;

    @Column()
    steam_waterproofing_external_wall: string;

    @Column()
    windscreen_external_wall: string;

    @Column()
    insulation_external_wall: string;

    @Column()
    overlap_thickness: string;

    @Column()
    OSB_thickness: string;

    @Column()
    steam_waterproofing_thickness: string;

    @Column()
    windscreen_thickness: string;

    @Column()
    insulation_thickness: string;

    @Column()
    OSB_internal_wall: string;
}
