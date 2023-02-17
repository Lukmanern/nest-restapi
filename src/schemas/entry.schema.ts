import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EntryDocument = HydratedDocument<Entry>;

@Schema()
export class Entry {
  @Prop()
  age: number;

  /**
   * can't be zero
   * can negative and positive
   **/
  @Prop()
  breed: string;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
