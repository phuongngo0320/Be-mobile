import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({
    timestamps: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id; // Optional: Map the _id field to id
        delete ret._id; // Exclude the _id field from the output
        delete ret.password; // Exclude the password field from the output
        delete ret.__v; // Exclude the __v field from the output
      }
    }
  })
  
export class Users{

    @Prop()
    name: string;

    @Prop()
    password : string;

    @Prop()
    email: string

}
export const usersSchema = SchemaFactory.createForClass(Users)