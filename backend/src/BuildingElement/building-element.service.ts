import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BuildingElement } from './building-element.entity';

@Injectable()
export class BuildingElementService {
    constructor(
        @InjectRepository(BuildingElement)
        private buildingElementRepository: Repository<BuildingElement>,
    ) {}

    async create(buildingElementData: Partial<BuildingElement>): Promise<BuildingElement> {
        return this.buildingElementRepository.save(buildingElementData);
    }

    async findAll(): Promise<BuildingElement[]> {
        return this.buildingElementRepository.find();
    }
	
	async findOne(id: number): Promise<BuildingElement> {
		return this.buildingElementRepository.findOne({ where: { id } });
	}
		
    async update(id: number, buildingElementData: Partial<BuildingElement>): Promise<BuildingElement> {
        await this.buildingElementRepository.update(id, buildingElementData);
        return this.buildingElementRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.buildingElementRepository.delete(id);
    }
}
