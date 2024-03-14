import { PartialType } from '@nestjs/swagger';
import { CreateStructuralElementBasementDto } from './create-structural_element_basement.dto';

export class UpdateStructuralElementBasementDto extends PartialType(CreateStructuralElementBasementDto) {}
