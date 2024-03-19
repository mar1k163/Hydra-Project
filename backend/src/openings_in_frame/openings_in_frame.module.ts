import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpeningsInFrame } from './entity/openings_in_frame.entity';
import { OpeningsInFrameService } from './openings_in_frame.service';
import { OpeningsInFrameController } from './openings_in_frame.controller';
import { StructuralElementFrame } from 'src/structural_element_frame/entity/structural_element_frame.entity';
import { Opening } from 'src/openings/entity/opening.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OpeningsInFrame, StructuralElementFrame, Opening])],
  providers: [OpeningsInFrameService],
  controllers: [OpeningsInFrameController],
})
export class OpeningsInFrameModule {}
