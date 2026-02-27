import { Module } from '@nestjs/common';
import { CardsBartendersController } from './controllers/cards-bartenders.controller';
import { CardsBartendersService } from './service/cards-bartenders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsBartenders, SchemaCardsBartenders } from './schema/schemaWaiters';

@Module({
    imports:[
        MongooseModule.forFeature([{name: CardsBartenders.name, schema: SchemaCardsBartenders}])
    ],
    controllers:[CardsBartendersController],
    providers:[CardsBartendersService]
})
export class MenuBartendersModule {}
