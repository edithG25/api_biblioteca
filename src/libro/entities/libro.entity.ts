import { Autor } from 'src/autor/entities/autor.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Libro {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  isbn: string;
  @ManyToOne(() => Autor, (autor) => autor.libros)
  autor: Autor;
  @OneToMany(() => Prestamo, (prestamo) => prestamo.libroId)
  prestamos: Prestamo[];
}
