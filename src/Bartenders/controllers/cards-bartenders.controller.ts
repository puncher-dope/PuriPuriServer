import { Controller, Post, Get, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CardsBartendersService } from '../service/cards-bartenders.service';
import { CreateCardBartendersDto } from '../create-card-bartenders.dto';
import { ApiResponseDto } from '../create-card-bartenders.dto';
import { CardsForBartenders } from 'src/types/cardsTypes';
import { AuthGuard } from '@nestjs/passport';

@Controller('menuBartenders')
@UseGuards(AuthGuard('jwt'))
export class CardsBartendersController {
    constructor(private readonly cardsBartendersService: CardsBartendersService) { }

    @Post()
    createCardBartenders(@Body() body: CreateCardBartendersDto): ApiResponseDto<CardsForBartenders[]> {
        return this.cardsBartendersService.createCardsBartenders(body)
    }

    @Get()
    allCardsWaiters(): CardsForBartenders[] {
        return this.cardsBartendersService.allCardsBartenders()
    }

    @Patch(':id')
    updateCard(@Param('id') id: string, @Body() body: Partial<CreateCardBartendersDto>) {
        return this.cardsBartendersService.updateCard(id, body)
    }

    @Delete(':id')
    deleteOneCard(@Param('id')id: string){
        return this.cardsBartendersService.deleteOneCard(id)
    }
}
