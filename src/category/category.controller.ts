import { Body, Controller, Inject, Post, Query,Get, Put } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreateCategoryUseCaseInput from './usecases/dtos/create.category.usecase.input';
import CreateCategoryUseCaseOutput from './usecases/dtos/create.category.usecase.output';
import CategoryTokens from './category.tokens';
import GetCategoryUsecaseInput from './usecases/dtos/get.category.usecase.input';
import GetCategoryUseCaseOutput from './usecases/dtos/get.category.usecase.output';
import UpdateCategoryControllerInput from './dtos/update.category.controller.input';
import UpdateCategoryDetailsUseCaseOutput from './usecases/dtos/update.category.usecase.output';
import UpdateCategoryDetailsUseCaseInput from './usecases/dtos/update.category.usecase.input';

@Controller('category')
export class CategoryController {

    @Inject(CategoryTokens.createCategoryUseCase)
    private readonly createCategoryUseCase: IUseCase<CreateCategoryUseCaseInput, CreateCategoryUseCaseOutput>

    @Inject(CategoryTokens.getCategoryUseCase)
    private readonly getCategoryUseCase:IUseCase<GetCategoryUsecaseInput,GetCategoryUseCaseOutput>

    @Inject(CategoryTokens.updateCategoryDatailsUseCase)
    private readonly updateCategoryDatailsUseCase:IUseCase<UpdateCategoryDetailsUseCaseInput, UpdateCategoryDetailsUseCaseOutput>
    

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
    async createCategory(@Body() input: CreateCategoryUseCaseInput): Promise<CreateCategoryUseCaseOutput>{
        const useCaseInput = new CreateCategoryUseCaseInput({ ...input})
        return await this.createCategoryUseCase.run(useCaseInput)
    }

    @Put()
    async updateCategoryDetails(@Body() input: UpdateCategoryControllerInput) :Promise<UpdateCategoryDetailsUseCaseOutput>{
        const useCaseInput = new UpdateCategoryDetailsUseCaseInput({...input});
        return await this.updateCategoryDatailsUseCase.run(useCaseInput)
    }

    
}
