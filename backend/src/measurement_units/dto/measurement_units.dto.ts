  import { ApiProperty } from "@nestjs/swagger";

export class MeasurementUnitsDTO {
	@ApiProperty({
		default: "Name",
	  })
	  measurement_units_name: string;
	
	}