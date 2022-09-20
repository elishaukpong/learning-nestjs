import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import coffeesConfig from './coffees.config';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Coffee, Flavor, Event]), 
      ConfigModule.forFeature(coffeesConfig)
    ],
    controllers: [CoffeesController],
    providers: [
      CoffeesService,
      {
        provide: COFFEE_BRANDS,
        useFactory: () => ['buddy brews', 'nescafe']
      }
    ],
    exports: [CoffeesService]
  }) 
export class CoffeesModule {}
 