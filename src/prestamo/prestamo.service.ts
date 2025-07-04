import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Libro } from 'src/libro/entities/libro.entity';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private prestamoRepository: Repository<Prestamo>,
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>, // Assuming Prestamo is the entity class
  ) {}

  async create(dto: CreatePrestamoDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: dto.usuarioId },
    });
    const libro = await this.libroRepository.findOne({
      where: { id: dto.libroId },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    if (!libro) throw new NotFoundException('Libro no encontrado');
    const prestamo = this.prestamoRepository.create({
      usuarioId: usuario,
      libroId: libro,
      fechaPrestamo: dto.fechaPrestamo,
      fechaDevolucion: dto.fechaDevolucion,
    });
    return this.prestamoRepository.save(prestamo);
  }

  findAll() {
    return this.prestamoRepository.find({
      relations: ['libro', 'usuario'], // Assuming these are the relations you want to include
    });
  }

  findOne(id: number) {
    return this.prestamoRepository.findOne({
      where: { id },
      relations: ['libro', 'usuario'], // Assuming these are the relations you want to include
    });
  }

  async update(id: number, dto: UpdatePrestamoDto) {
    const prestamo = await this.findOne(id);
    if (!prestamo) throw new NotFoundException('Prestamo no encontrado');
    if (dto.usuarioId) {
      const usuario = await this.usuarioRepository.findOne({
        where: { id: dto.usuarioId },
      });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      prestamo.usuarioId = usuario;
    }
    if (dto.libroId) {
      const libro = await this.libroRepository.findOne({
        where: { id: dto.libroId },
      });
      if (!libro) throw new NotFoundException('Libro no encontrado');
      prestamo.libroId = libro;
    }
    Object.assign(prestamo, dto);
    return this.prestamoRepository.save(prestamo);
  }

  async remove(id: number) {
    const prestamo = await this.findOne(id);
    if (!prestamo) throw new NotFoundException('Prestamo no encontrado');
    return this.prestamoRepository.remove(prestamo);
  }
}
