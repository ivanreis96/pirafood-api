import { Body, Controller, Inject, Post, Query,Get } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreateCategoryUseCaseInput from './usecases/dtos/create.category.usecase.input';
import CreateCategoryUseCaseOutput from './usecases/dtos/create.category.usecase.output';
import CategoryTokens from './category.tokens';
import GetCategoryUsecaseInput from './usecases/dtos/get.category.usecase.input';
import GetCategoryUseCaseOutput from './usecases/dtos/get.category.usecase.output';

@Controller('category')
export class CategoryController {

    @Inject(CategoryTokens.createCategoryUseCase)
    private readonly createCategoryUseCase: IUseCase<CreateCategoryUseCaseInput, CreateCategoryUseCaseOutput>

    @Inject(CategoryTokens.getCategoryUseCase)
    private readonly getCategoryUseCase:IUseCase<GetCategoryUsecaseInput,GetCategoryUseCaseOutput>


    @Get()
    async getCategory(
        @Query('name') type?:string
    ):Promise<GetCategoryUseCaseOutput>{
        const useCaseInput = new GetCategoryUsecaseInput({
            name: !!type ? type :null,
        })
        return await this.getCategoryUseCase.run(useCaseInput)
    }


    @Post()
    async createCategory(@Body() input: CreateCategoryUseCaseInput,): Promise<CreateCategoryUseCaseOutput>{
        const useCaseInput = new CreateCategoryUseCaseInput({ ...input})
        return await this.createCategoryUseCase.run(useCaseInput)
    }


    
}
