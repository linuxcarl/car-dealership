import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private Cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Toyota', model: 'Yaris' },
    { id: 3, brand: 'Toyota', model: 'Camry' },
    { id: 4, brand: 'Toyota', model: 'RAV4' },
  ];
  find() {
    return this.Cars;
  }

  findOne(id: number) {
    const car = this.Cars.find((r) => r.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }
}
