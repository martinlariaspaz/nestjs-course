import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDTO } from './dto/car.dto';

const ParseUUIDPipeVersion4 = new ParseUUIDPipe({version:'4'});

@Controller('cars')
@UsePipes(ValidationPipe)
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
  getCarById(@Param('id', ParseUUIDPipeVersion4) id:string){
    const foundedCar = this.carsService.findOneById(id);
    
    return foundedCar;
  };
  
  @Post()
  createCar(@Body() body: CreateCarDTO){
    this.carsService.create(body);
    
    return body;
  }
  
  @Patch(':id')
  patchCar(
    @Param('id', ParseUUIDPipeVersion4) id:string,
    @Body() updateCarDTO: UpdateCarDTO){
      const updatedCar = this.carsService.update(id,updateCarDTO);

      return updatedCar;
  }

  @Delete(':id')
  deleteCar(@Param('id',ParseUUIDPipeVersion4) id: string){
    this.carsService.delete(id);
  }
}
