import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePrestamoDto {
  @IsNotEmpty()
  fechaPrestamo: Date;
  @IsOptional()
  fechaDevolucion?: Date;
  @IsNumber()
  usuarioId: number;
  @IsNumber() // Assuming usuarioId is a foreign key
  libroId: number; // Assuming libroId is a foreign key
}
