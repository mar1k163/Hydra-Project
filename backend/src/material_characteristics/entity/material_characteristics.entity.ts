import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class materialCaracteristicsId {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	measurement_unit_id: number;

	@Column()
	materials_id: number;

	@Column()
	length: number;

	@Column() 
	wedth: number;

	@Column()
	thickness: number;

	@Column()
	volume: number;
}