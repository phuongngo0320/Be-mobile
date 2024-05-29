import { ApiProperty } from '@nestjs/swagger';
export class updateWallets{

    @ApiProperty({
        description: 'wallet_id',
    })
    readonly _id: string
    @ApiProperty({
        description: 'new name ',
        required: false
    })
    readonly name: string
    @ApiProperty({
        description: 'new type ',
        required: false
    })
    readonly type: string
}