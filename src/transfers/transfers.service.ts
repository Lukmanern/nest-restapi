import {
  Inject,
  Injectable,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TransferDocument, Transfer } from 'src/schemas/Transfer.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(Transfer.name) private TransferModel: Model<TransferDocument>,
    @Inject(UsersService) private usersService: UsersService,
  ) {}

  async create(createTransferDto: CreateTransferDto) {
    if (createTransferDto['amount'] <= 0) {
      throw new PreconditionFailedException(
        'Proses Failed, amount is zero (has no effect)',
      );
    }
    const fromUserID = createTransferDto['from_user_id'];
    const toUserID = createTransferDto['to_user_id'];
    const fromUser = this.usersService.findOne(fromUserID);
    this.usersService.findOne(toUserID);
    const balance = (await fromUser).balance - createTransferDto['amount'];
    if (balance < 0) {
      throw new PreconditionFailedException(
        'Proses Failed, balance is lower than the needs',
      );
    }

    this.usersService.update(fromUserID, {
      balance: -1 * createTransferDto['amount'],
    });
    this.usersService.update(toUserID, {
      balance: createTransferDto['amount'],
    });

    return new this.TransferModel(createTransferDto).save();
  }

  async findAll() {
    return this.TransferModel.find();
  }
}
