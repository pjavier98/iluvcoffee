import { Module, Injectable } from '@nestjs/common';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRANDS } from './coffees.constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';

@Injectable()
export class CoffeeBrandsFractory {
    create() {
        /* ... do something ... */
        return ['buddy brew', 'nescafe'];
    }
}

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController],
    providers: [
        CoffeesService, 
        CoffeeBrandsFractory,
        { 
            provide: COFFEE_BRANDS, 
            useFactory: (brandsFactory: CoffeeBrandsFractory) => brandsFactory.create(),
            inject: [CoffeeBrandsFractory]
        }
    ],
    exports: [CoffeesService]
})
export class CoffeesModule {}
