import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MaterialCharacteristics } from './material-characteristic.entity';

@Entity()
export class PriceList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    purchasePrice: number;

    @Column()
    sellingPrice: number;

    @Column()
    date: Date;

    @ManyToOne(() => MaterialCharacteristics)
    materialCharacteristic: MaterialCharacteristics;
}
