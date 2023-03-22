import { IsAlpha, IsEnum, IsNumber } from 'class-validator';
import Gender from 'src/shared/enums/Gender';
export class CreateUserDto {
  id?: number;

  @IsAlpha()
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(Gender)
  gender: Gender;
}
