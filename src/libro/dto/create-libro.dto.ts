import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLibroDto {
  @IsNotEmpty()
  titulo: string;
  @IsNumber()
  isbn: string;
  @IsNumber()
  autorId: number; // Assuming autorId is a foreign key
}
