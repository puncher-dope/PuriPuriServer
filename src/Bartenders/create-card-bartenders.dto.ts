export type CardsForBartendersStructure = {
  nameStructure: string;
  unit: string;
  count: string;
};


export class CreateCardBartendersDto {
  name: string;
  volume: string
  category: "wine" | "vodka" | "cognac" | "wisky" | "coffee" | "coctail" | "limonade";
  dishes?: 'Хайбол' | 'Мини-Хайбол' | 'Рокс' | 'Мини-Рокс' |
  'Флюте' | 'Снифтер' | 'Чашка-200' | 'Чашка-300' |
  'Тюльпан' | 'Вино' | 'Эспрессо' | 'Айриш' | 'Шале' | 'Рюмка'
  structure?: CardsForBartendersStructure[];
  technology?: string
}

export class ApiResponseDto<T>{
data:T
  message: string | null
}
