import { Injectable } from '@nestjs/common';

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
    return this.Cars.find((r) => r.id === +id);
  }
}
