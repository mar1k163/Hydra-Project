  import { ApiProperty } from "@nestjs/swagger";

export class OpeningUpdateDTO {
	@ApiProperty({
		default: 10,
	  })
	  type: string;
	
	  @ApiProperty({
		default: 5,
	  })
	  width: number;
	
	  @ApiProperty({
		default: 2,
	  })
	  height: number;
	
	}