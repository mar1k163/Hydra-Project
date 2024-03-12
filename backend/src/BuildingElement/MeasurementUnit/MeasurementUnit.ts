import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MeasurementUnit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
