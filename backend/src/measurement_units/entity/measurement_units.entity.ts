import { MaterialCharacteristics } from "src/material_characteristics/entity/material_characteristics.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class MeasurementUnits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  measurement_units_name: string;

  @OneToMany(
    (type) => MaterialCharacteristics,
    (material) => material.measurement_unit
  )
  material: MaterialCharacteristics[];
}
