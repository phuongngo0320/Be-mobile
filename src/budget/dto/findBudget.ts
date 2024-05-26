import { ApiProperty } from '@nestjs/swagger';
export class findBudgetDTO{
    @ApiProperty({
        description: 'wallet_id'
    })
    readonly wallet_id : string
    
}