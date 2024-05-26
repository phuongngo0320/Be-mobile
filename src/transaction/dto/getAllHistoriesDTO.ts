import { ApiProperty } from '@nestjs/swagger';
export class getAllistoriesDTO{
    @ApiProperty({

        description: 'user_ID',
    })
    readonly user_ID: string

    @ApiProperty({

        description: 'start_date',
    })
    readonly start_date: string

    @ApiProperty({

        description: 'end_date',
    })
    readonly end_date: string
 
}