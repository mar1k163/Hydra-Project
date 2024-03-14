import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StructuralFrameElement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
