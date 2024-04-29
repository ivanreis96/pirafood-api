import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from "mongoose";


export type CategoryDocmente = HydratedDocument<Category>;
@Schema({versionKey: false})

export class Category {
    @Prop({ required:true})
    name:string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
