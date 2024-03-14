import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaterialCharacteristics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    measurement_unit_id: number;

    @Column()
    materials_id: number;

    @Column({ type: 'float', nullable: true })
    length: number;

    @Column({ type: 'float', nullable: true })
    width: number;

    @Column({ type: 'float', nullable: true })
    thickness: number;

    @Column({ type: 'float', nullable: true })
    volume: number;
}
