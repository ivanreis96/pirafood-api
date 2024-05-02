import { InjectModel } from '@nestjs/mongoose';
import ICategoryRepository from './interfaces/category.repository.interface';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { skip } from 'node:test';
import Find from './usecases/dtos/find.by.filter';

@Injectable()
export default class CategoryRepository implements ICategoryRepository {
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

  async find(): Promise<Find> {
    let query = this.categoryModel.find()
    const skipQuery =query.clone()
    const [items] = await Promise.all([
      skipQuery.exec(),
    ]);

    return new Find({items});
  }
  async create(data: Partial<Category>): Promise<Category>{
    return await this.categoryModel.create({
      ...data,
      createdAt:new Date(),
      updatedAt: new Date,
    });
  }
}
