import { IsNotEmpty } from 'class-validator';

export class CreateAutorDto {
  @IsNotEmpty()
  nombre: string;
}
