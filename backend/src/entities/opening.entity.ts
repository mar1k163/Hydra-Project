import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Opening {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
