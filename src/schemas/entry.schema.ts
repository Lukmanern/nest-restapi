import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  age: number;

  /**
   * can't be zero
   * can negative and positive
   **/
  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
