import { ApiProperty } from '@nestjs/swagger';
export class createWalletsDto{
    @ApiProperty(
        {
            description: 'wallets name ',
            example: 'vi shopping'
        }
    )
    readonly name : string

    @ApiProperty({

        description: 'ID of user',
        example : '66237fef97705968270a6dab'
    })
    readonly user_ID:  String
    
    @ApiProperty(
        {
            description: 'type',
            example: 'shopping'
        }
    )
    readonly type: String

    @ApiProperty({
        description: 'The amount of money ',
        example: '5000'
    })
    readonly amount: Number
    
}