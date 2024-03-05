import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/users.entities';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(
    createCatDto: CreateUserDto,
  ): Promise<Pick<User, 'userName' | 'phone'>> {
    const createdCat = new this.userModel(createCatDto);
    const { userName, phone } = await createdCat.save();

    return { userName, phone };
  }

  async getAll(): Promise<User[]> {
    return await this.userModel.find({}, { userName: 1, phone: 1 }).exec();
  }
}
