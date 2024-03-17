import { Injectable } from "@nestjs/common";
import { CreateResultDto } from "./dto/create-result.dto";
import { UpdateResultDto } from "./dto/update-result.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ResultsEntity } from "./entities/result.entity";
import { Repository } from "typeorm";

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(ResultsEntity)
    private repository: Repository<ResultsEntity>
  ) {}

  create(createResultDto: CreateResultDto) {
    return this.repository.save(createResultDto);
  }

  findAll() {
    return this.repository.find();
  }
}
