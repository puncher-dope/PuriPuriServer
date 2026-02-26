import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardsWaitersController } from './controllers/cards-waiters.controller';
import { CardsWaitersService } from 'src/cards-waiters/service/cards-waiters.service';

@Module({
    imports: [],
    controllers: [CardsWaitersController],
    providers: [CardsWaitersService],
})
export class MenuWaitersModule { }
