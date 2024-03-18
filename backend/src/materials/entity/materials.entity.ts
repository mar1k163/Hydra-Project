import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Materials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  material_caracteristics_id: number;

  @Column()
  material_type: string;

  @Column()
  structural_element_type: string;
}
