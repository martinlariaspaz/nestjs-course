import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController{

  constructor(
    private readonly carsService: CarsService
    ){
  }
  @Get()
  getAllCars() {
    return  this.carsService.findAll();
  };

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id:number){
    const foundedCar = this.carsService.findOneById(id);

    if(!foundedCar) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    
    return foundedCar;
  };
  
  @Post()
  createCar(@Body() body:any){

    return body;
  }
  
  @Patch(':id')
  patchCar(
    @Param('id', ParseIntPipe) id:number,
    @Body() body:any){
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id',ParseIntPipe) id: number){
    return {
      method: 'delete',
      id,
    }

  }
}
