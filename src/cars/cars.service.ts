import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dto/car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  public findAll(){
    return this.cars;
  };

  create(createCarDto: CreateCarDTO){
    const newCar:Car = {
      id: uuid(),
      ...createCarDto
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id:string,updateCarDto: UpdateCarDTO){
    const foundedCar = this.findOneById(id);
    
    this.cars = this.cars.map((car) =>{
      if(car.id === id){
        return {
          ...foundedCar,
          ...updateCarDto,
          id,
        }
      }

      return car;
    })

    return foundedCar;
  }

  delete(id:string){
    const foundedCar = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== foundedCar.id);
  }

  public findOneById(id:string){
    const car = this.cars.find(car => car.id === id)
    
    if(!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  };

  public fillCarsWithSeedData(cars: Car[]){
    this.cars = cars;
  }
}
