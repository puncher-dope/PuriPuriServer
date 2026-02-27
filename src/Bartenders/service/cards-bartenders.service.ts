import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CardsBartenders } from '../schema/schemaWaiters';
import { CreateCardBartendersDto } from '../create-card-bartenders.dto';

@Injectable()
export class CardsBartendersService {
    constructor(@InjectModel(CardsBartenders.name) private cardBartendersModel: Model<CardsBartenders>){}

    async createCardsBartenders(body: CreateCardBartendersDto):Promise<CardsBartenders[]> {

        const newCard = new this.cardBartendersModel(body)
        await newCard.save()

        return this.cardBartendersModel.find().exec()
    }

    async allCardsBartenders():Promise<CardsBartenders[]> {
        return await this.cardBartendersModel.find().exec()
    }

    async updateCard(id: string, body: Partial<CreateCardBartendersDto>):Promise<CardsBartenders[] | null> {
        
        await this.cardBartendersModel.findByIdAndUpdate(id, body, {new: true}).exec()

        return this.cardBartendersModel.find().exec()
    }

    async deleteOneCard(id: string):Promise<CardsBartenders[]> {
        await this.cardBartendersModel.findByIdAndDelete(id)
      
        return this.cardBartendersModel.find().exec()
    }
}
