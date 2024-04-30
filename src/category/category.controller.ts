import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreateCategoryUseCaseInput from './usecases/dtos/create.category.usecase.input';
import CreateCategoryUseCaseOutput from './usecases/dtos/create.category.usecase.output';
import CategoryTokens from './category.tokens';

@Controller('category')
export class CategoryController {

    @Inject(CategoryTokens.createCategoryUseCase)
    private readonly createCategoryUseCase: IUseCase<CreateCategoryUseCaseInput, CreateCategoryUseCaseOutput>


    @Post()
    async createCategory(@Body() input: CreateCategoryUseCaseInput): Promise<CreateCategoryUseCaseOutput>{
        const useCaseInput = new CreateCategoryUseCaseInput({ ...input})
        return await this.createCategoryUseCase.run(useCaseInput)
    }
    
}
