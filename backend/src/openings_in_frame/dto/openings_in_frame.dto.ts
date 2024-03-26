import { ApiProperty } from "@nestjs/swagger";

export class OpeningsInFrameDTO {
	@ApiProperty({
		default: 10,
	  })
	  amount: number;
	
	  @ApiProperty({
		default: 5,
	  })
	  structural_element_frame_id: number;
	
	}