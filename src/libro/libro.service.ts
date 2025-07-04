import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepositoy: Repository<Libro>, // Assuming Libro is the entity class
  ) {}

  create(data: CreateLibroDto) {
    const libro = this.libroRepositoy.create(data);
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
