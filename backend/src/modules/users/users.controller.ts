import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entities';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Post()
  createUsers(
    @Body() createUsersDTO: CreateUserDto,
  ): Promise<Pick<User, 'userName' | 'phone'>> {
    return this.usersService.create(createUsersDTO);
  }
}
