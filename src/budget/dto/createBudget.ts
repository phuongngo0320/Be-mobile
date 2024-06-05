import { ApiProperty } from '@nestjs/swagger';
export class createBudgetDTO{
    @ApiProperty({
        description: 'The name of Budget',
        example: 'cl1235'
    })
    readonly name : string
    @ApiProperty({

        description: 'ID of wallet',
        example : '662373683f8efccec560c2c0'
    })
    readonly wallet_id: string

    @ApiProperty(
        {
            description: 'category of budget',
            example: 'clothes'
        }
    )
    readonly category: string

    @ApiProperty(
        {
            description: 'amount of money',
            example: '25000'
        }
    )
    readonly amount: Number

    @ApiProperty(
        {
            example: '20/5/2024'
        }
    )
    readonly start_date: string

    @ApiProperty(
        {
            example: '15/6/2024'
        }
    )
    readonly end_date: String
}