import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { StructuralElementBasementService } from "./structural_element_basement.service";
import { CreateStructuralElementBasementDto } from "./dto/create-structural_element_basement.dto";
import { UpdateStructuralElementBasementDto } from "./dto/update-structural_element_basement.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("structural-element-basement")
@ApiTags("structural-element-basement")
export class StructuralElementBasementController {
  constructor(
    private readonly structuralElementBasementService: StructuralElementBasementService
  ) {}

  @Post()
  create(
    @Body()
    createStructuralElementBasementDto: CreateStructuralElementBasementDto
  ) {
    return this.structuralElementBasementService.create(
      createStructuralElementBasementDto
    );
  }

  @Get()
  findAll() {
    return this.structuralElementBasementService.findAll();
  }
}
