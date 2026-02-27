import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CardsWaitersService } from '../service/cards-waiters.service';
import { CardsForWaiters } from 'src/types/cardsTypes';
import { ApiResponseDto, CreateCardWaitersDto } from '../create-card-waiters.dto';
import { AuthGuard } from '@nestjs/passport';
import { CardsWaiters } from '../schema/schemaWaiters';

@Controller('menuWaiters')
@UseGuards(AuthGuard('jwt'))
export class CardsWaitersController {
    constructor(private readonly cardsWaitersService:CardsWaitersService){}


    @Post()
    async createCardWaiters(@Body() body: Partial<CreateCardWaitersDto>):Promise<CardsWaiters[]>{
        return this.cardsWaitersService.createCardWaiters(body);
    }

    @Get()
    async allCardsWaiters():Promise<CardsWaiters[]>{
        return this.cardsWaitersService.allCardsWaiters()
    }

    @Patch(':id')
    async updateCard(@Param('id') id: string, @Body() body: Partial<CreateCardWaitersDto>): Promise<CardsWaiters[] | null>{
        return this.cardsWaitersService.updateCard(id, body)
    }


    @Delete(':id')
    async deleteOneCard(@Param('id') id: string):Promise<CardsWaiters[]>{
        return this.cardsWaitersService.deleteOneCard(id)
    }
}
