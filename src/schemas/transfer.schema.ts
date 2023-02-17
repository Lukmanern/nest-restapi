import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransferDocument = HydratedDocument<Transfer>;

@Schema()
export class Transfer {
  @Prop()
  from_user_id: string;

  @Prop()
  to_user_id: string;

  /**
   * amount is ALWAYS MORE THAN ZERO
   **/
  @Prop()
  amount: number;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);
