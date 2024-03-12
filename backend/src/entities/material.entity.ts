import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    materialCharacteristicId: number;

    @Column()
    materialType: string;

    @Column()
    constructionElementType: string;
}
