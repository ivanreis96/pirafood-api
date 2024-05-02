import { IUseCase } from "src/domain/iusecase.interface";
import UpdateCategoryDetailsUseCaseInput from "./dtos/update.category.usecase.input";
import UpdateCategoryDetailsUseCaseOutput from "./dtos/update.category.usecase.output";
import CategoryTokens from "../category.tokens";
import ICategoryRepository from "../interfaces/category.repository.interface";
import { Inject } from "@nestjs/common";

export default class UpdateCategoryDetailsUsecase implements IUseCase<UpdateCategoryDetailsUseCaseInput, UpdateCategoryDetailsUseCaseOutput>{
    
    constructor(
        @Inject(CategoryTokens.categoryRepository)
        private readonly categoryRepository: ICategoryRepository
    ){ }

    async run(input: UpdateCategoryDetailsUseCaseInput): Promise<UpdateCategoryDetailsUseCaseOutput> {
        
        await this.categoryRepository.update(input)

        const category = await this.categoryRepository.get()

        return new UpdateCategoryDetailsUseCaseOutput({
            name: category.name,
            updatedAt: category.updatedAt,
            createdAt: category.createdAt
        })
    }
    
}