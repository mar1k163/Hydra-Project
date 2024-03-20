import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceLists } from './entity/price_list.entity';
import { PriceListsService } from './price_list.service';
import { PriceListsController } from './price_list.controller';
import { MaterialCharacteristics } from 'src/material_characteristics/entity/material_characteristics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceLists, MaterialCharacteristics])],
  providers: [PriceListsService],
  controllers: [PriceListsController],
})
export class PriceListsModule {}
