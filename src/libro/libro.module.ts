import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { Libro } from './entities/libro.entity';
import { Autor } from 'src/autor/entities/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro, Autor])], // Assuming Libro is the entity class
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
