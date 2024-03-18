import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Opening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('float')
  width: number;

  @Column('float')
  height: number;
}
