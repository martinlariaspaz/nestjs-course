import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';


@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService,
    private readonly carService: CarsService,
    private readonly brandsService: BrandsService
    ) {}

  @Get()
  runSeed() {
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    
    return this.seedService.populateDB()
  }

}
