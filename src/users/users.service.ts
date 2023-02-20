import {
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto['balance'] < 0 || createUserDto['balance'] == null) {
      createUserDto['balance'] = 0;
    }
    const creatUser = new this.userModel(createUserDto);
    return creatUser.save();
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    const isValidID = isValidObjectId(id);
    if (!isValidID) {
      throw new NotFoundException('User not found');
    }
    const user = await this.userModel.findById(id);
    if (user == null) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const updateBalance = (await user).balance + updateUserDto['balance'];
    if (updateUserDto['balance'] == 0) {
      throw new PreconditionFailedException(
        'Proses Failed, balance-update is zero (has no effect)',
      );
    }
    if (updateBalance < 0) {
      throw new PreconditionFailedException(
        'Proses Failed, balance is lower than the needs',
      );
    }

    (await user).balance = updateBalance;
    (await user).save();

    return user;
  }

  async remove(id: string) {
    const user = this.findOne(id);
    return (await user).delete();
  }
}
