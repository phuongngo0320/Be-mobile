import { ApiProperty } from '@nestjs/swagger';
export class modifyTransactionDTO{
    @ApiProperty({

        description: 'ID of tranaction',
    })
    readonly _id: String
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
            required: false
        }
    )
    readonly  created_at: string;

    @ApiProperty(
        {
            description: 'note for transaction ',
            required: false
        }
    )
    readonly note_info: string

    
}