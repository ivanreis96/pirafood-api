import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/category.schema';
import CategoryTokens from './category.tokens';
import CreateCategoryUseCase from './usecases/create.category.usecase';

import GetCategoryUsecase from './usecases/get.category.usecase';
import CategoryRepository from './category.repository';


@Module({
  controllers: [CategoryController],

  imports:[MongooseModule.forFeature([{name: Category.name, schema:CategorySchema}])],
  providers:[
    {
      provide:CategoryTokens.createCategoryUseCase,
      useClass:CreateCategoryUseCase
    },
    {
      provide:CategoryTokens.getCategoryUseCase,
      useClass:GetCategoryUsecase
    },
    {
      provide:CategoryTokens.categoryRepository,
      useClass:CategoryRepository,
    }
  
  ]
})
export class CategoryModule {}
