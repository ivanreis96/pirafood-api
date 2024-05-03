import { IUseCase } from "src/domain/iusecase.interface";
import UpdateCategoryByIdUseCaseInput from "./dtos/get.category.by.id.usecase.input";
import UpdateCategoryByIdUseCaseOutput from "./dtos/get.category.by.id.usecase.output";
import CategoryTokens from "../category.tokens";
import ICategoryRepository from "../interfaces/category.repository.interface";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()

export default class UpdateCategoryByIdUsecase implements IUseCase<UpdateCategoryByIdUseCaseInput, UpdateCategoryByIdUseCaseOutput>{
    
    constructor(
        @Inject(CategoryTokens.categoryRepository)
        private readonly categoryRepository: ICategoryRepository
    ){ }

    async run(input: UpdateCategoryByIdUseCaseInput): Promise<UpdateCategoryByIdUseCaseOutput> {
        
        // await this.categoryRepository.update(input)

        // const category = await this.categoryRepository.geCategorytById()

        // return new UpdateCategoryByIdUseCaseOutput({
        //     name: category.name,
        //     updatedAt: category.updatedAt,
        //     createdAt: category.createdAt
        // })
        return null
    }
    
}