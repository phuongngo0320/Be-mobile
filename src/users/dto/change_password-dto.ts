import { ApiProperty } from "@nestjs/swagger"

export class change_password{
    @ApiProperty({
        description: 'users email ',
        example: 'Magnus.Wiza@yahoo.com'
    })
    readonly email : string

    @ApiProperty()
    readonly oldpassword: string
    
    @ApiProperty()
    readonly password: string
}