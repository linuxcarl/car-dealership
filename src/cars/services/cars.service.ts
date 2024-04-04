import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from '../interfaces/car.interface';
import { CreateCarDto } from '../dtos';
import { UpdateCarDto } from '../dtos/update-car.dto';
@Injectable()
export class CarsService {
  private Cars = [];
  find(): Car[] {
    return this.Cars;
  }

  findOne(id: string): Car {
    const car = this.Cars.find((r) => r.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(car: CreateCarDto): Car {
    const newCar = {
      id: uuid(),
      ...car,
    };
    this.Cars.push(newCar);
    return newCar;
  }
  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOne(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    this.Cars = this.Cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.Cars = this.Cars.filter((car) => car.id !== id);
    return true;
  }
  fillCarsWithSeedData(cars: Car[]) {
    this.Cars = cars;
  }
}
