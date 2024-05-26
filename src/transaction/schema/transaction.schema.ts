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
  
export class transactions{

    @Prop()
    wallet_id: String;

    @Prop()
    category : String

    @Prop()
    is_pay : boolean;

    @Prop({default: 0})
    amount: Number;

    @Prop()
    created_at: String;

    @Prop()
    note_info: String;


}
export const transactionsSchema = SchemaFactory.createForClass(transactions)