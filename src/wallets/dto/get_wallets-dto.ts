import { ApiProperty } from '@nestjs/swagger';
export class getWalletsDto{

    @ApiProperty({
        description: 'user_ID ',
    })
    readonly user_ID: string
}