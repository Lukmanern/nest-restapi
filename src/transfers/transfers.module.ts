import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TransferSchema, Transfer } from 'src/schemas/Transfer.schema';

/*
  @Prop()
  id: number;

  @Prop()
  from_user_id: number;

  @Prop()
  to_user_id: number;

  @Prop()
  amount: number;
*/

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transfer.name, schema: TransferSchema },
    ]),
  ],
  controllers: [TransfersController],
  providers: [TransfersService],
})
export class TransfersModule {}
