import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  id: true,
  versionKey: false,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  },
})
export class User {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  passwordConfirm: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
