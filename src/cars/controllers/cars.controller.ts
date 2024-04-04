import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from '../services/cars.service';
import { CreateCarDto } from '../dtos';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll() {
    return this.carsService.find();
  }

  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOne(id);
  }
  @Post()
  createCar(@Body() body: CreateCarDto) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return {
      method: 'delete',
      id,
    };
  }
}
