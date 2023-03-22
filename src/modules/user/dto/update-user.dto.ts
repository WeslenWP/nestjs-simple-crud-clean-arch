import { PartialType } from '@nestjs/mapped-types';
import Gender from 'src/shared/enums/Gender';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string;
  age: number;
  gender: Gender;
}
