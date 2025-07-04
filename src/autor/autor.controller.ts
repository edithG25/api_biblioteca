import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';

@Controller('autores')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() dto: CreateAutorDto) {
    return this.autorService.create(dto);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
