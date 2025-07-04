import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';
import { CreateAutorDto } from './dto/create-autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>,
  ) {}

  create(dto: CreateAutorDto) {
    const autor = this.autorRepository.create(dto);
    return this.autorRepository.save(autor);
  }

  findAll() {
    return this.autorRepository.find();
  }

  findOne(id: number) {
    return this.autorRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const autor = await this.findOne(id);
    if (!autor) throw new NotFoundException('Autor no encontrado');
    return this.autorRepository.remove(autor);
  }
}
