import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MeasurementUnits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  measurement_units_name: string;
}
