import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BuildingElement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numberOfFloors: number;

    @Column()
    floorNumber: number;

    @Column()
    floorHeight: number;

    @Column()
    baseArea: number;

    @Column()
    externalWallThickness: number;

    @Column()
    innerWallLength: number;

    @Column()
    innerWallThickness: number;

    @Column()
    externalWallError: string;

    @Column()
    vaporBarrierExternal: string;

    @Column()
    windProtectionExternal: string;

    @Column()
    insulationExternal: string;

    @Column()
    ceilingThickness: number;

    @Column()
    osbThicknessCeiling: number;

    @Column()
    vaporBarrierCeiling: string;

    @Column()
    windProtectionCeiling: string;

    @Column()
    insulationCeiling: string;

    @Column()
    osbForInnerWalls: string;

    @Column()
    results_id: string;
}
