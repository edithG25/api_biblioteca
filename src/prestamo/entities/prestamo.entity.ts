import { Libro } from 'src/libro/entities/libro.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fechaPrestamo: Date;
  @Column()
  fechaDevolucion: Date;
  @ManyToOne(() => Libro, (libro) => libro.prestamos)
  libroId: number;
  @ManyToOne(() => Usuario, (usuario) => usuario.prestamos)
  usuarioId: number;
}
