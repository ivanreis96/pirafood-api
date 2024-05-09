import { IUseCase } from "src/domain/iusecase.interface";
import UpdateCategoryByIdUseCaseInput from "./dtos/get.category.by.id.usecase.input";
import UpdateCategoryByIdUseCaseOutput from "./dtos/get.category.by.id.usecase.output";
import CategoryTokens from "../category.tokens";
import ICategoryRepository from "../interfaces/category.repository.interface";
import { Inject, Injectable } from "@nestjs/common";
import { Category } from "../schemas/category.schema";
import CategoryNotFoundError from "src/domain/errors/category.not.found.error";

@Injectable()

export default class UpdateCategoryByIdUseCase implements IUseCase<UpdateCategoryByIdUseCaseInput, UpdateCategoryByIdUseCaseOutput>{
    
    constructor(
        @Inject(CategoryTokens.categoryRepository)
        private readonly categoryRepository: ICategoryRepository
    ){ }

    async run(input: UpdateCategoryByIdUseCaseInput): Promise<UpdateCategoryByIdUseCaseOutput> {
        
        let category = await this.getCategoryById(input.id)

        if(!category){
            throw new CategoryNotFoundError()
        }

        await this.categoryRepository.updateById({
            ...input,
            _id: input.id
        })


        return new UpdateCategoryByIdUseCaseOutput({
            id : category._id,
            name : category.name,
            updatedAt : category.updatedAt,
            createdAt : category.createdAt,
        })      
    }
    
    private async getCategoryById(id: string): Promise<Category>
    {
        try {
            return await this.categoryRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}