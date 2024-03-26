import { ApiProperty } from "@nestjs/swagger";

export class PriceListsDTO {
	@ApiProperty({
		default: "2024-03-24",
	  })
	  date: string;
	
	  @ApiProperty({
		default: 1000,
	  })
	  purchasePrice: number;
	
	  @ApiProperty({
		default: 1500,
	  })
	  sellingPrice: number;
  }
  