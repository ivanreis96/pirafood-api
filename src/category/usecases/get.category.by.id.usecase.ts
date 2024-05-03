import { IUseCase } from "src/domain/iusecase.interface";
import GetCategoryByIdUseCaseInput from "./dtos/get.category.by.id.usecase.input";
import GetCategoryByIdUseCaseOutput from "./dtos/get.category.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import CategoryTokens from "../category.tokens";
import ICategoryRepository from "../interfaces/category.repository.interface";
import { Category } from "../schemas/category.schema";
import CategoryNotFoundError from "src/domain/errors/category.not.found.error";


@Injectable()
export default class GetCategoryByIdUseCase implements IUseCase<GetCategoryByIdUseCaseInput, GetCategoryByIdUseCaseOutput>{

    constructor(
        @Inject(CategoryTokens.categoryRepository)
        private readonly categoryRepository: ICategoryRepository,

    ) {}

    async run(input: GetCategoryByIdUseCaseInput): Promise<GetCategoryByIdUseCaseOutput> {
        const category = await this.getCategoryById(input.id)

        if(category === null){
            throw new CategoryNotFoundError() 
        }

        return new GetCategoryByIdUseCaseOutput({
            id: category._id,
            name: category.name,
            createdAt : category.createdAt,
            updatedAt : category.updatedAt,
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