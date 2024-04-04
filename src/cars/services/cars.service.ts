import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from '../interfaces/car.interface';
@Injectable()
export class CarsService {
  private Cars = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Toyota', model: 'Yaris' },
    { id: uuid(), brand: 'Toyota', model: 'Camry' },
    { id: uuid(), brand: 'Toyota', model: 'RAV4' },
  ];
  find(): Car[] {
    return this.Cars;
  }

  findOne(id: string): Car {
    const car = this.Cars.find((r) => r.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }
}
