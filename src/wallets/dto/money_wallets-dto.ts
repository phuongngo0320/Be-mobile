import { ApiProperty } from '@nestjs/swagger';
export class money_wallets{

    @ApiProperty({
        description: 'user email',
        example: 'Magnus.Wiza@yahoo.com'
    })
    readonly email: string
    @ApiProperty({
        description: 'amout of money want to do',
        example: '2000'
    })
    readonly money: Number
    @ApiProperty({
        example: 'vi nuoc hoa'
    })
    readonly wallets_name: string
}