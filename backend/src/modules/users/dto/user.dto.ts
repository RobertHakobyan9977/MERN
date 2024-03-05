import {
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Match } from '../../../common/decorators/match.decorator';

export class CreateUserDto {
  @IsString()
  @MaxLength(32, {
    message: 'User name must be shorter than or equal to $constraint1 chars',
  })
  @IsNotEmpty()
  userName: string;

  @Min(1)
  @Max(9999999999, {
    message: 'Phone number must be shorter than or equal to 10 chars',
  })
  @IsInt()
  @IsNotEmpty()
  phone: number;

  @MinLength(6, {
    message: 'Password must be longer than or equal to $constraint1 chars',
  })
  @MaxLength(12, {
    message: 'Password must be shorter than or equal to $constraint1 chars',
  })
  @Matches(/(?=.*?[A-Z])/, {
    message: 'Should include uppercase letter',
  })
  @Matches(/(?=.*?[!@#$%^&*()_+\-=\\[\]{};':"|,.<>\/?])/, {
    message: 'Should include special char',
  })
  @IsNotEmpty()
  password: string;

  @Match('password', { message: 'Passwords not matching' })
  @IsNotEmpty()
  passwordConfirm: string;
}
