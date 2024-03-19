import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MaterialCharacteristics } from 'src/material_characteristics/entity/material_characteristics.entity';

@Entity()
export class PriceLists {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MaterialCharacteristics)
  material_characteristics: MaterialCharacteristics;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'float' })
  purchase_price: number;

  @Column({ type: 'float' })
  selling_price: number;
}
