import { ApiProperty } from "@nestjs/swagger";

export class MaterialCharacteristicsDTO {
	@ApiProperty({
		default: 10,
	  })
	  length: number;
	
	  @ApiProperty({
		default: 5,
	  })
	  width: number;
	
	  @ApiProperty({
		default: 2,
	  })
	  thickness: number;
	
	  @ApiProperty({
		default: 100,
	  })
	  volume: number;

	  @ApiProperty({
		default: 1,
	  })
	  materials_id: number;

	  @ApiProperty({
		default: 1,
	  })
	  measurement_unit_id: number;

	  @ApiProperty({
		default: "Имя",
	  })
	  name: string;
	}