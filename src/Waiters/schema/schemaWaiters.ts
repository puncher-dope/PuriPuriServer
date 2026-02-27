import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps:true,
    collection: 'menuWaiters'
})
export class CardsWaiters extends Document{
    @Prop({ require: true })
    id: string
    @Prop({ require: true })
    name: string
    @Prop({ 
        require: true,
        enum: ['wine', 'vodka', 'cognac', 'wisky', 'coffee', 'coctail', 'limonade']
    })
    category: string
    @Prop({ require: true })
    volume: string

    @Prop()
    structure: string
    @Prop()
    comment: string
    @Prop()
    description: string
}

export const SchemaCardsWaiters = SchemaFactory.createForClass(CardsWaiters)