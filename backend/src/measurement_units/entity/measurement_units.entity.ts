import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { MaterialCharacteristics } from "src/material_characteristics/entity/material_characteristics.entity";

@Entity()
export class MeasurementUnits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  measurement_units_name: string;

  @OneToMany(
    () => MaterialCharacteristics,
    (material_characteristics) => material_characteristics.measurement_unit
  )
  material_characteristics: MaterialCharacteristics[];
}
