import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardsWaitersService } from './cards-waiters/cards-waiters.service';
import { CardsWaitersController } from './cards-waiters/cards-waiters.controller';
import { CardsBartendersService } from './cards-bartenders/cards-bartenders.service';
import { CardsBartendersController } from './cards-bartenders/cards-bartenders.controller';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true // делает переменные доступными во всем приложении
    })
  ],
  controllers: [CardsWaitersController, CardsBartendersController, LoginController],
  providers: [CardsWaitersService, CardsBartendersService, LoginService],
})
export class AppModule {}
