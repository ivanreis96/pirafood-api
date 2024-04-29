import { InjectModel } from '@nestjs/mongoose';
import ICategoryRepository from './interfaces/category.repository.interface';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
  ) {}

  async update(data: Category): Promise<void> {
    await this.categoryModel.updateOne(null, {
      ...data,
      updateAt: new Date(),
    });
  }

  async get(): Promise<Category> {
    return await this.categoryModel.findOne();
  }
  async create(data: Partial<Category>): Promise<Category>{
    return await this.categoryModel.create({
      ...data,
      createdAt:new Date(),
      updatedAt: new Date,
    });
  }
}
