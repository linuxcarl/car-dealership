import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from '../services/cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll() {
    return this.carsService.find();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }
}
