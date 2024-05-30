import { ApiProperty } from "@nestjs/swagger"

export class createUsersDto{
    @ApiProperty({
        description: 'users email ',
        example: 'Twean',
        required: false })
    readonly name : string

    @ApiProperty({ 
        description: 'users email ',
        example: 'Magnus.Wiza@yahoo.com',
        required: false }    
    )
    readonly email: string

    @ApiProperty({ 
        example: '123456',
        required: false }    
    )
    password: string
}