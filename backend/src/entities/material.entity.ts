import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    material_characteristics_id: number;

    @Column({ nullable: true })
    material_type: string;

    @Column({ nullable: true })
    structural_element_type: string;
}
