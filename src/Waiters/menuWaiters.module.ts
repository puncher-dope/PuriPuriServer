import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardsWaitersController } from './controllers/cards-waiters.controller';
import { CardsWaitersService } from './service/cards-waiters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsWaiters, SchemaCardsWaiters } from './schema/schemaWaiters';

@Module({
    imports: [MongooseModule.forFeature([{name: CardsWaiters.name, schema: SchemaCardsWaiters}])],
    controllers: [CardsWaitersController],
    providers: [CardsWaitersService],
})
export class MenuWaitersModule { }
