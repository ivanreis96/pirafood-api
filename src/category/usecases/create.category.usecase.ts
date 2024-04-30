import { Inject } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import CategoryTokens from "../category.tokens";
import ICategoryRepository from "../interfaces/category.repository.interface";
import CreateCategoryUseCaseInput from "./dtos/create.category.usecase.input";
import CreateCategoryUseCaseOutput from "./dtos/create.category.usecase.output";

export default class CreateCategoryUseCase
    implements IUseCase<CreateCategoryUseCaseInput,CreateCategoryUseCaseOutput>
    {
        constructor(
            @Inject(CategoryTokens.categoryRepository)
            private readonly categoryRepository: ICategoryRepository,
        ){}
        async run(input: CreateCategoryUseCaseInput):Promise<CreateCategoryUseCaseOutput>{
            const newCategory = await this.categoryRepository.create(input);
            return new CreateCategoryUseCaseOutput({
                id:newCategory._id,
                name:newCategory.name,
                createdAt:newCategory.createdAt,
                updatedAt: newCategory.updatedAt,
            });
        }
    }