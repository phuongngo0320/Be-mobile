import { ApiProperty } from '@nestjs/swagger';
export class createWalletsDto{
    @ApiProperty({
        example: 'vi nuoc hoa'
    })
    readonly wallets_name : string
    @ApiProperty({
        description: 'The amount of money ',
        example: '5000'
    })
    readonly budget: Number

    @ApiProperty(
        {
            description: 'users email ',
            example: 'Magnus.Wiza@yahoo.com'
        }
    )
    readonly email: string
}