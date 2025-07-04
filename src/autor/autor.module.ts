import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
