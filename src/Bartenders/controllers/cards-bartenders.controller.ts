import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CardsBartendersService } from '../service/cards-bartenders.service';
import { CreateCardBartendersDto } from '../create-card-bartenders.dto';
import { AuthGuard } from '@nestjs/passport';
import { CardsBartenders } from '../schema/schemaBartenders';

@Controller('menuBartenders')
@UseGuards(AuthGuard('jwt'))
export class CardsBartendersController {
  constructor(
    private readonly cardsBartendersService: CardsBartendersService,
  ) {}

  @Post()
  async createCardBartenders(
    @Body() body: CreateCardBartendersDto,
  ): Promise<CardsBartenders[]> {
    return this.cardsBartendersService.createCardsBartenders(body);
  }

  @Get()
  async allCardsWaiters(): Promise<CardsBartenders[]> {
    return this.cardsBartendersService.allCardsBartenders();
  }

  @Patch(':id')
  async updateCard(
    @Param('id') id: string,
    @Body() body: Partial<CreateCardBartendersDto>,
  ): Promise<CardsBartenders[] | null> {
    return this.cardsBartendersService.updateCard(id, body);
  }

  @Delete(':id')
  async deleteOneCard(@Param('id') id: string): Promise<CardsBartenders[]> {
    return this.cardsBartendersService.deleteOneCard(id);
  }
}
