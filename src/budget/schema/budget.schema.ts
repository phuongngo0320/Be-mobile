import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema({
    timestamps: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id; // Optional: Map the _id field to id
        delete ret._id; // Exclude the _id field from the output
        delete ret.__v; // Exclude the __v field from the output
      }
    }
  })
  
export class budget{

    @Prop()
    category: string;

    @Prop()
    name : String

    @Prop()
    wallet_id : String;

    @Prop({default: 0})
    amount: Number;

    @Prop()
    initial_amount : Number;
    
    @Prop()
    start_date: string;

    @Prop()
    end_date: string;


}
export const budgetSchema = SchemaFactory.createForClass(budget)