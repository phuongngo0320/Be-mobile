import { ApiProperty } from '@nestjs/swagger';
export class modifyTransactionDTO{
    @ApiProperty({

        description: 'ID of tranaction',
    })
    readonly _id: String
    @ApiProperty({

        description: 'ID of wallet',
        required: false
    })
    readonly wallet_id: String

    @ApiProperty(
        {
            description: 'category of budget ',
            required: false
        }
    )
    readonly category: String

    @ApiProperty(
        {
            description: 'amount of money ',
            required: false
        }
    )
    readonly amount: Number

    @ApiProperty(
        {
            example: true,
            required: false

        }
    )
    readonly is_pay: boolean

    @ApiProperty(
        {
            description: 'note for transaction ',
            required: false
        }
    )
    readonly note_info: string

    
}