import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiResponseType, CardsForBartenders } from 'src/types/cardsTypes';

@Injectable()
export class CardsBartendersService {
    private cards: CardsForBartenders[] = [
        {
            id: "1",
            name: "Бабл-гам матча",
            category: "coffee",
            volume: "350мл",
            dishes: "Тюльпан",
            structure: [
                {
                    id: "1",
                    nameStructure: "Кофе зерна",
                    unit: "гр",
                    count: "18"
                },
                {
                    id: "2",
                    nameStructure: "Молоко",
                    unit: "мл",
                    count: "300"
                },
                {
                    id: "3",
                    nameStructure: "Сироп Бабл гам",
                    unit: "гр",
                    count: "15"
                },
                {
                    id: "4",
                    nameStructure: "Пищевой краситель ",
                    unit: "гр",
                    count: "1"
                },
                {
                    id: "5",
                    nameStructure: "Сахарная пудра",
                    unit: "гр",
                    count: "1"
                },
                {
                    id: "6",
                    nameStructure: "Шоколадный кранч белый",
                    unit: "гр",
                    count: "10"
                }
            ],
            technology: "Готовим доппио по классическому методу (см. 'Доппио'). Наливаем в питчер молоко, добавляем пищевой краситель, сироп и взбиваем стимером, делая пену и нагревая жидкость. Молоко необходимо расширить на 10% от общего объема. Пена должна получиться гладкая, глянцевая, без пузырей. Вливаем молоко в готовый эспрессо, размешивая крема, пытаемся нарисовать простой рисунок. Сверху посыпаем сахарной пудрой, перемешанной с красителем, и кранчем."
        },
        {
            id: "2",
            name: "Джин Огурец",
            category: "coctail",
            volume: "130мл",
            dishes: "Рокс",
            structure: [
                {
                    id: "1",
                    nameStructure: "Огурец свежий",
                    unit: "гр",
                    count: "25"
                },
                {
                    id: "2",
                    nameStructure: "Джин Биолоджи",
                    unit: "мл",
                    count: "40"
                },
                {
                    id: "3",
                    nameStructure: "Сироп имбирный п/ф",
                    unit: "мл",
                    count: "20"
                },
                {
                    id: "4",
                    nameStructure: "Лимон джус ",
                    unit: "мл",
                    count: "20"
                }
            ],
            technology: "Рокс охлаждаем с помощью льда. В шейкер добавляем нарезанный кубиком огурец, с помощью мадлера тщательно давим его. Далее добавляем все остальные составляющие. Шейкуем со льдом, при помощи стрейнера переливаем в рокс, предварительно слив из него талую воду. Украшаем огурцом, нарезанным пиллером."
        },
        {
            id: "3",
            name: "Лимонад 'Вишня Малина'",
            category: "limonade",
            volume: "250мл",
            dishes: "Хайбол",
            structure: [
                {
                    id: "1",
                    nameStructure: "Концентрат вишня",
                    unit: "мл",
                    count: "40"
                },
                {
                    id: "2",
                    nameStructure: "Пюре малина",
                    unit: "мл",
                    count: "40"
                },
                {
                    id: "3",
                    nameStructure: "Лимон джус",
                    unit: "мл",
                    count: "20"
                },
                {
                    id: "4",
                    nameStructure: "Содовая ",
                    unit: "мл",
                    count: "130"
                },
                {
                    id: "5",
                    nameStructure: "Сироп малина  ",
                    unit: "мл",
                    count: "22"
                },
                {
                    id: "5",
                    nameStructure: "Мята свежая листья  ",
                    unit: "гр",
                    count: "1"
                }
            ]
        }
    ]

    createCardsBartenders(body: CardsForBartenders): ApiResponseType<CardsForBartenders[]> {
        const newCard = { ...body }
        this.cards.push(newCard)

        return {
            data: this.cards,
            message: 'Success'
        }
    }

    allCardsBartenders() {
        return this.cards
    }

    updateCard(id: string, body: Partial<CardsForBartenders>) {
        const cardsIndex = this.cards.findIndex(card => card.id === id)

        if (cardsIndex === -1) {
            throw new NotFoundException('Card with id not found')
        }

        const updateCard = { ...this.cards[cardsIndex], ...body }
        this.cards[cardsIndex] = updateCard

        return {
            data: updateCard,
            message: `Deleted card`
        }
    }

    deleteOneCard(id: string) {
        this.cards = this.cards.filter(card => card.id !== id)

        return {
            data: this.cards,
            message: `Deleted card`
        }
    }
}
