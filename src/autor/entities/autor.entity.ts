import { Libro } from 'src/libro/entities/libro.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Autor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @OneToMany(() => Libro, (libro) => libro.autor)
  libros: Libro[];
}
