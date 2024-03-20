import { Controller, Post, Body } from '@nestjs/common';
import { PriceListsService } from './price_list.service';
import { PriceListsDTO } from './dto/price_list.dto';

@Controller('price-lists')
export class PriceListsController {
  constructor(private readonly priceListsService: PriceListsService) {}

  @Post()
  async create(@Body() priceListsData: PriceListsDTO) {
    return this.priceListsService.create(priceListsData);
  }
}
