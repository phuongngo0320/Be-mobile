import { ApiProperty } from '@nestjs/swagger';
export class deleteBudgetDTO{
    @ApiProperty({
        description: 'budget _id'
    })
    readonly _id : string
    
}