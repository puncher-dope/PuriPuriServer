import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CardsWaitersService } from '../service/cards-waiters.service';
import { CardsForWaiters } from 'src/types/cardsTypes';
import { ApiResponseDto, CreateCardWaitersDto } from '../create-card-waiters.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('menuWaiters')
@UseGuards(AuthGuard('jwt'))
export class CardsWaitersController {
    constructor(private readonly cardsWaitersService:CardsWaitersService){}
    @Post()
    createCardWaiters(@Body() body: CreateCardWaitersDto):ApiResponseDto<CardsForWaiters[]>{
        return this.cardsWaitersService.createCardWaiters(body);
    }

    @Get()
    allCardsWaiters():CardsForWaiters[]{
        return this.cardsWaitersService.allCardsWaiters()
    }

    @Patch(':id')
    updateCard(@Param('id') id: string, @Body() body: Partial<CreateCardWaitersDto>){
        return this.cardsWaitersService.updateCard(id, body)
    }


    @Delete(':id')
    deleteOneCard(@Param('id') id: string):ApiResponseDto<CardsForWaiters[]>{
        return this.cardsWaitersService.deleteOneCard(id)
    }
}
