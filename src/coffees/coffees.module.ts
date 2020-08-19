import { Module } from '@nestjs/common';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRANDS } from './coffees.constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController],
    providers: [
        CoffeesService, 
        { 
            provide: ConfigService,
            useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService,
        }, 
        { 
            provide: COFFEE_BRANDS, 
            useValue: ['buddy brew', 'nescafe'] 
        }
    ],
    exports: [CoffeesService]
})
export class CoffeesModule {}
