import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  /**
   * balance is ALWAYS POSITIVE, can be zero
   **/
  @Prop()
  balance: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
