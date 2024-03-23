import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { MaterialCharacteristics } from "src/material_characteristics/entity/material_characteristics.entity";

@Entity()
export class Materials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  material_type: string;

  @Column()
  structural_element_type: string;

  @OneToMany(
    () => MaterialCharacteristics,
    (material_characteristics) => material_characteristics.material
  )
  material_characteristics: MaterialCharacteristics[];
}
