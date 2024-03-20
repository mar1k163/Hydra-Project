import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OpeningController } from "./opening.controller";
import { OpeningService } from "./opening.service";
import { Opening } from "./entity/opening.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Opening])],
  controllers: [OpeningController],
  providers: [OpeningService],
  exports: [OpeningService],
})
export class OpeningModule {}
