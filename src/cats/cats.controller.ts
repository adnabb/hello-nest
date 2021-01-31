import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from '../common/filter/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return this.catsService.findAll()
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message'
    }, HttpStatus.FORBIDDEN)
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
