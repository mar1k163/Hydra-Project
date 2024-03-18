import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ResultsEntity } from 'src/results/entities/result.entity';

@Entity()
export class StructuralElementFrame {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ResultsEntity)
  results: ResultsEntity;

  @Column()
  amount_floor: number;

  @Column()
  floor_number: number;

  @Column()
  floor_height: number;

  @Column('float')
  perimeter_of_external_walls: number;

  @Column('float')
  base_area: number;

  @Column('float')
  external_wall_thickness: number;

  @Column('float')
  internal_wall_length: number;

  @Column('float')
  internal_wall_thickness: number;

  @Column()
  OSB_external_wall: string;

  @Column()
  steam_waterproofing_external_wall: string;

  @Column()
  windscreen_external_wall: string;

  @Column()
  insulation_external_wall: string;

  @Column()
  overlap_thickness: string;

  @Column()
  OSB_thickness: string;

  @Column()
  steam_waterproofing_thickness: string;

  @Column()
  windscreen_thickness: string;

  @Column()
  insulation_thickness: string;

  @Column()
  OSB_internal_wal: string;
}
