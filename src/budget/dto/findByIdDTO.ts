import { ApiProperty } from '@nestjs/swagger';
export class findByIdDTO{
    @ApiProperty({
        description: 'find by budget id'
    })
    readonly _id : string
    
}