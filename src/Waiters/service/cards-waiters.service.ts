import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  CardsForWaiters } from 'src/types/cardsTypes';
import { CardsWaiters } from '../schema/schemaWaiters';
import { Model } from 'mongoose';

@Injectable()
export class CardsWaitersService {
    constructor(@InjectModel(CardsWaiters.name) private cardsWaitersModel: Model<CardsWaiters>){}


    //CREATE
    async createCardWaiters(body:Partial<CardsForWaiters>): Promise<CardsWaiters[]> {
        const newCard = new this.cardsWaitersModel(body)
        await newCard.save()
        return this.cardsWaitersModel.find().exec()
    }

    //GET
    async allCardsWaiters(): Promise<CardsWaiters[]> {
        return await this.cardsWaitersModel.find().exec()
    }


    //UPDATE
    async updateCard(id: string, body:Partial<CardsForWaiters>): Promise<CardsWaiters[] | null> {
         
        await this.cardsWaitersModel.findByIdAndUpdate(id, body, {new: true}).exec()

        return this.cardsWaitersModel.find().exec()
    }


    //DELETE
    async deleteOneCard(id: string): Promise<CardsWaiters[]>{
        await this.cardsWaitersModel.findByIdAndDelete(id).exec()

        return this.cardsWaitersModel.find().exec()
    }

}
