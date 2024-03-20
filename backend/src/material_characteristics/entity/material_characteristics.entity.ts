import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MeasurementUnits } from "src/measurement_units/entity/measurement_units.entity";
import { Materials } from "src/materials/entity/materials.entity";

@Entity()
export class MaterialCharacteristics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    (type) => MeasurementUnits,
    (measurement_unit) => measurement_unit.material
  )
  measurement_unit: MeasurementUnits;

  @ManyToOne(() => Materials, (material) => material.material_caracteristics_id)
  material: Materials;

  @Column({ type: "float", nullable: true })
  length: number;

  @Column({ type: "float", nullable: true })
  width: number;

  @Column({ type: "float", nullable: true })
  thickness: number;

  @Column({ type: "float", nullable: true })
  volume: number;
}
