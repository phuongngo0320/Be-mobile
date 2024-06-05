import { ApiProperty } from "@nestjs/swagger"

export class deleteUsersDto{

    @ApiProperty({ 
        description: '_id of user',
     }    
    )
    _id: string
}