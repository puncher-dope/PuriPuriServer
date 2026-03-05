import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class StructureItem {
    @Prop()
    nameStructure: string
    @Prop()
    unit: string
    @Prop()
    count: 'wine' | 'vodka' | 'cognac' | 'wisky' | 'coffee' | 'coctail' | 'limonade'
}
export const SchemaStructureItem = SchemaFactory.createForClass(StructureItem)


@Schema({
    timestamps: true,
    collection: 'menuBartenders'
})
export class CardsBartenders extends Document {
    @Prop({ require: true })
    name: string
    @Prop({ require: true })
    volume: string
    @Prop({
        require: true,
        enum: ['wine', 'vodka', 'cognac', 'wisky', 'coffee', 'coctail', 'limonade'],
        message: 'Выберите категорию'
    })
    category: string
    @Prop({
        required: false,
        enum: ['Хайбол', 'Мини-Хайбол', 'Рокс', 'Мини-Рокс',
            'Флюте', 'Снифтер', 'Чашка-200', 'Чашка-300',
            'Тюльпан', 'Вино', 'Эспрессо', 'Айриш', 'Шале', 'Рюмка']
    })
    dishes: string


    @Prop({type: [SchemaStructureItem], default:[]})
    structure: StructureItem[]
    @Prop()
    technology: string
}

export const SchemaCardsBartenders = SchemaFactory.createForClass(CardsBartenders)

