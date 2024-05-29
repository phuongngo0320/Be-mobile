import { ApiProperty } from '@nestjs/swagger';
export class findInRangeDTO{
    @ApiProperty({

        description: 'wallet_id',
    })
    readonly wallet_id: string

    @ApiProperty({

        description: 'start_date',
        required: false
    })
    readonly start_date: string

    @ApiProperty({

        description: 'end_date',
        required: false
    })
    readonly end_date: string
 
}