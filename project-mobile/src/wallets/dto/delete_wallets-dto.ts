import { ApiProperty } from '@nestjs/swagger';
export class deleteWallets{

    @ApiProperty({
        description: 'user email',
        example: 'Magnus.Wiza@yahoo.com'
    })
    readonly email: string
    @ApiProperty({
        example: 'vi nuoc hoa'
    })
    readonly wallets_name: string
}