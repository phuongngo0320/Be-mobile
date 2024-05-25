import { ApiProperty } from '@nestjs/swagger';
export class deleteBudgetDTO{
    @ApiProperty({
        description: 'The name of Budget to delete',
        example: 'toys Budget'
    })
    readonly name : string
    
}