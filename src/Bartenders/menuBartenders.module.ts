import { Module } from '@nestjs/common';
import { CardsBartendersController } from './controllers/cards-bartenders.controller';
import { CardsBartendersService } from './service/cards-bartenders.service';

@Module({
    imports:[],
    controllers:[CardsBartendersController],
    providers:[CardsBartendersService]
})
export class MenuBartendersModule {}
