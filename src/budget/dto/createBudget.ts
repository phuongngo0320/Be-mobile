import { ApiProperty } from '@nestjs/swagger';
export class createBudgetDTO{
    @ApiProperty({
        description: 'The name of Budget',
        example: 'toys Budget'
    })
    readonly name : string
    @ApiProperty({

        description: 'ID of wallet',
        example : '662373683f8efccec560c2c0'
    })
    readonly wallet_id: string

    @ApiProperty(
        {
            description: 'category of budget ',
            example: 'shopping'
        }
    )
    readonly category: string

    @ApiProperty(
        {
            description: 'amount of money ',
            example: '25000'
        }
    )
    readonly amount: Number

    @ApiProperty(
        {
            example: '30/5/2022'
        }
    )
    readonly start_date: string

    @ApiProperty(
        {
            example: '15/6/2023 '
        }
    )
    readonly end_date: string
}