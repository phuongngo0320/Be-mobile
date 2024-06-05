import { ApiProperty } from '@nestjs/swagger';
export class deleteTransactionDTO{
    @ApiProperty({

        description: 'ID of transaction',
    })
    readonly _id: String
}