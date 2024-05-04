import { InjectModel } from '@nestjs/mongoose';
import ICategoryRepository from './interfaces/category.repository.interface';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { skip } from 'node:test';
import Find from './usecases/dtos/find.by.filter';

@Injectable()
export default class CategoryController implements ICategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
  ) {}

  async updateById(data: Partial<Category>): Promise<void> {
    await this.categoryModel.updateOne(
      {
        _ud: data._id,
      },
      {
        ...data,
        updatedAt: new Date()
      }
    )
  }

  async getById(id: string): Promise<Category>{
      return await this.categoryModel.findById(id)
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
