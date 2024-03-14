import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class MaterialCharacteristic {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MaterialCharacteristic)
    material: MaterialCharacteristic;

    @Column()
    width: number;

    @Column()
    thickness: number;

    @Column()
    length: number;

    @Column()
    volume: number;

    @Column()
    materialType: string;

    @Column()
    constructionElementType: string;
}
