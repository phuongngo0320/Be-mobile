import { ApiProperty } from '@nestjs/swagger';
export class deleteWallets{

    @ApiProperty({
        description: 'wallet id ',
    })
    readonly _id: string
  
}