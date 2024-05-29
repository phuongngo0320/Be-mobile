import { ApiProperty } from "@nestjs/swagger"
import { isEmpty } from "rxjs"

export class loginDTO{
    @ApiProperty({
        description: 'users email '})
    readonly email : string

    @ApiProperty({ 
        description:' users password'})
   readonly password: string

}