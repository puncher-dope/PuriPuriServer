import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiResponseType, CardsForWaiters } from 'src/types/cardsTypes';

@Injectable()
export class CardsWaitersService {
    private cards: CardsForWaiters[] = [
        {
            id: "1",
            name: "Бабл-гам матча",
            volume: "280мл",
            category: "coffee",
            structure: "Розовая матча, сироп бабл гам, классическое молоко, лёд",
            comment: "Розовая матча-это 100% натуральная сублимированная пудра питахайи родом из Коста-Рики",
            description: "Нежный напиток, сочетающий в себе терпкость розовой матчи и легкую сладость сиропа бабл гам."
        },
        {
            id: "2",
            name: "Джин-огурец",
            volume: "130мл",
            category: "coctail",
            structure: "Джин, огурец, сироп имбирь, фреш лимона",
            description: "Летний освежающий коктейль с добавлением сочного огурца, пикантного имбиря и легкими хвойными нотками."
        },
        {
            id: "3",
            name: "Матча-тоник маракуйя",
            volume: "250мл",
            category: "limonade",
            structure: "Матча розовая, пюре маракуйа, фреш лимона, сахарный сироп, тоник",
            description: "Освежающий напиток, который сочетает в себе яркий вкус розовой матчи, терпкого тоника и экзотическую нотку маракуйи."
        }
    ]
    createCardWaiters(body:CardsForWaiters): ApiResponseType<CardsForWaiters[]> {
        const newCard = {...body}
        this.cards.push(newCard)
        return {
            data: this.cards,
            message: 'Success'
        }
    }


    allCardsWaiters(): CardsForWaiters[] {
        return this.cards
    }

    updateCard(id: string, body:Partial<CardsForWaiters>): ApiResponseType<CardsForWaiters> {
         const cardIndex = this.cards.findIndex(card => card.id === id)
          if (cardIndex === -1) {
            throw new NotFoundException(`Card with id not found`);
        }
        const updatedCard = {...this.cards[cardIndex], ...body}
        this.cards[cardIndex] = updatedCard
        return {
            data: updatedCard,
            message: `Deleted card` 
        }
    }

    deleteOneCard(id: string): ApiResponseType<CardsForWaiters[]>{
        this.cards = this.cards.filter(card => card.id !== id)

        return {
            data: this.cards,
            message: `Deleted card`
        }
    }

}
