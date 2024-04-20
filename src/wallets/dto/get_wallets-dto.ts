import { ApiProperty } from '@nestjs/swagger';
export class getWalletsDto{

    @ApiProperty({
        description: 'user email',
        example: 'Magnus.Wiza@yahoo.com'
    })
    readonly email: string
}