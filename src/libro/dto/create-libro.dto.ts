import { IsISBN, IsNotEmpty } from 'class-validator';

export class CreateLibroDto {
  @IsNotEmpty()
  titulo: string;
  @IsISBN()
  isbn: string;
}
