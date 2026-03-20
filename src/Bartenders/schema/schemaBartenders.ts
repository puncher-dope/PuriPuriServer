import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class StructureItem {
  @Prop()
  nameStructure: string;
  @Prop()
  unit: string;
  @Prop()
  count: string;
}
export const SchemaStructureItem = SchemaFactory.createForClass(StructureItem);

@Schema({
  timestamps: true,
  collection: 'menuBartenders',
})
export class CardsBartenders extends Document {
  @Prop({ require: true })
  name: string;
  @Prop({ require: true })
  volume: string;
  @Prop({
    require: true,
    enum: [
      'coffee',
      'tea',
      'warmingTea',
      'glintvein',
      'mors_uzvar',
      'water_juices',
      'importedLemonades',
      'cocktails',
      'lemonades',
      'aperitifs',
      'vodka',
      'distillates',
      'gin',
      'rum',
      'whiskey',
      'sangrias',
      'nastoyki',
      'wine',
      'tequila',
      'cognac',
      'polufabric',
    ],
    message: 'Выберите категорию',
  })
  category: string;
  @Prop({
    required: false,
    enum: [
      'Хайбол',
      'Мини-Хайбол',
      'Рокс',
      'Мини-Рокс',
      'Флюте',
      'Снифтер',
      'Чашка-200',
      'Чашка-300',
      'Тюльпан',
      'Вино',
      'Эспрессо',
      'Айриш',
      'Шале',
      'Рюмка',
      'Графин',
      'Чайник',
      'Полуфабрикаты',
    ],
  })
  dishes: string;

  @Prop({ type: [SchemaStructureItem], default: [] })
  structure: StructureItem[];
  @Prop()
  technology: string;
}

export const SchemaCardsBartenders =
  SchemaFactory.createForClass(CardsBartenders);
