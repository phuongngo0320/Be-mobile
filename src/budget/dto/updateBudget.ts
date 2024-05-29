import { ApiProperty } from '@nestjs/swagger';
export class updateBudgetDtO{
    @ApiProperty({
        description: 'budget id'
    })
    readonly _id : string

    @ApiProperty({
        description: 'wallet_id'
    })
    readonly  wallet_id : String;

    @ApiProperty({
        description: 'amount'
    })
    readonly amount : Number;

    @ApiProperty({
        description: 'category'
    })
    readonly  category : String;

    @ApiProperty({
        description: 'start_date'
    })
    readonly start_date: string

    @ApiProperty({

        description: 'end_date'
    })
    readonly end_date: string
    
}