import { Body, Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { Request } from 'express'
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Get('test')
  testCat(): string {
    return 'This is a test request'
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params)
    console.log(params.id)
    return `This action returns a #${params.id} cat`
  }
}
