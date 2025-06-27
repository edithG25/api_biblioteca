import { Autor } from 'src/autor/entities/autor';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Libro {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  isbn: string;
  @ManyToOne(() => Autor, (autor) => autor.libros)
  autor: Autor;
}
