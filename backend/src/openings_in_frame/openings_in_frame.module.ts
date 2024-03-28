import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OpeningsInFrame } from "./entity/openings_in_frame.entity";
import { OpeningsInFrameService } from "./openings_in_frame.service";
import { OpeningsInFrameController } from "./openings_in_frame.controller";
import { Opening } from "src/openings/entity/opening.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OpeningsInFrame])],
  providers: [OpeningsInFrameService],
  controllers: [OpeningsInFrameController],
  exports: [OpeningsInFrameService],
})
export class OpeningsInFrameModule {}
