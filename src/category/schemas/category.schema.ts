import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { prototype } from 'events';
import mongoose, { HydratedDocument } from "mongoose";


export type CategoryDocmente = HydratedDocument<Category>;
@Schema({versionKey: false})

export class Category {

    @Prop({required:true, auto:true, type: mongoose.Schema.Types.ObjectId})
    _id:string

    @Prop({ required:true})
    name:string
    @Prop({ required: true })
    createdAt: Date;
    @Prop({ required: true })
    updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category)
