import { ApiProperty } from "@nestjs/swagger"
import { isEmpty } from "rxjs"

export class getUsersDto{
    @ApiProperty({
        description: 'users email ',
        example: 'Towne',
        required: false })
    readonly name : string

    @ApiProperty({ 
        description: 'users email ',
        example: 'Magnus.Wiza@yahoo.com',
        required: false }    
    )
   readonly email: string

}