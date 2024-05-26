import { ApiProperty } from '@nestjs/swagger';
export class getHistoriesDTO{
    @ApiProperty({

        description: 'wallet_id',
        
    })
    readonly wallet_id: String

    
    
}