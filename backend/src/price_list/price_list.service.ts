import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceLists } from './entity/price_list.entity';
import { PriceListsDTO } from './dto/price_list.dto';

@Injectable()
export class PriceListsService {
  constructor(
    @InjectRepository(PriceLists)
    private readonly priceListsRepository: Repository<PriceLists>,
  ) {}

  async create(priceListsData: PriceListsDTO): Promise<PriceLists> {
    return this.priceListsRepository.save(priceListsData);
  }
}
