import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { Autor } from 'src/autor/entities/autor.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepositoy: Repository<Libro>,
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>, // Assuming Libro is the entity class
  ) {}

  async create(dto: CreateLibroDto) {
    const autor = await this.autorRepository.findOne({
      where: { id: dto.autorId },
    });
    if (!autor) throw new NotFoundException('Autor no encontrado');
    const libro = this.libroRepositoy.create({
      titulo: dto.titulo,
      isbn: dto.isbn,
      autor: autor, // Assuming autor is a relation in Libro entity
    });
    return this.libroRepositoy.save(libro);
  }

  findAll() {
    return this.libroRepositoy.find();
  }

  findOne(id: number) {
    return this.libroRepositoy.findOne({
      where: { id },
      relations: ['autor', 'prestamos'], // Assuming these are the relations you want to include
    });
  }

  async update(id: number, updateLibroDto: UpdateLibroDto) {
    const libro = await this.findOne(id);
    if (!libro) throw new NotFoundException('Libro no encontrado');
    Object.assign(libro, updateLibroDto);
    return this.libroRepositoy.save(libro);
  }

  async remove(id: number) {
    const libro = await this.findOne(id);
    if (!libro) throw new NotFoundException('Libro no encontrado');
    return this.libroRepositoy.remove(libro);
  }
}
