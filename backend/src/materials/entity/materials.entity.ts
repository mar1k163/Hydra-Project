import { MaterialCharacteristics } from "src/material_characteristics/entity/material_characteristics.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

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
    (type) => MaterialCharacteristics,
    (material_caracteristics_id) => material_caracteristics_id.material
  )
  material_caracteristics_id: MaterialCharacteristics[];
}
