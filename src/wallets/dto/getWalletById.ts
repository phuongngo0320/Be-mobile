import { ApiProperty } from '@nestjs/swagger';
export class getWalletsById{

    @ApiProperty({
        description: 'wallets_ID ',
    })
    readonly _id: string
}