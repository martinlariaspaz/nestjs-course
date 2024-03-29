import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { 
      id: 1, 
      brand: 'Toyoya', 
      model: 'Corolla' 
    }, 
    { 
      id: 2, 
      brand: 'Honda', 
      model: 'civic' 
    }, 
    { 
      id: 3, 
      brand: 'Jeep',
      model: 'Cherokee' 
    }
  ];

  public findAll(){
    return this.cars;
  };

  public findOneById(id:number){
    return this.cars.find(car => car.id === id)
  };
}
