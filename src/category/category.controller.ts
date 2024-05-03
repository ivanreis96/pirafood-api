import { Body, Controller, Inject, Post, Query,Get, Put, Param, BadRequestException } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreateCategoryUseCaseInput from './usecases/dtos/create.category.usecase.input';
import CreateCategoryUseCaseOutput from './usecases/dtos/create.category.usecase.output';
import CategoryTokens from './category.tokens';
import GetCategoryUsecaseInput from './usecases/dtos/get.category.usecase.input';
import GetCategoryUseCaseOutput from './usecases/dtos/get.category.usecase.output';
import GetCategoryByIdUseCaseInput from './usecases/dtos/get.category.by.id.usecase.input';
import GetCategoryByIdUseCaseOutput from './usecases/dtos/get.category.by.id.usecase.output';

@Controller('category')
export class CategoryController {

    @Inject(CategoryTokens.createCategoryUseCase)
    private readonly createCategoryUseCase: IUseCase<CreateCategoryUseCaseInput, CreateCategoryUseCaseOutput>

    @Inject(CategoryTokens.getCategoryUseCase)
    private readonly getCategoryUseCase:IUseCase<GetCategoryUsecaseInput, GetCategoryUseCaseOutput>

    @Inject(CategoryTokens.getCategoryByIdUseCase)
    private readonly getCategoryByIdUseCase:IUseCase<GetCategoryByIdUseCaseInput, GetCategoryUseCaseOutput>
    

    @Get()
    async getCategory(
        @Query('name') type?:string
    ):Promise<GetCategoryUseCaseOutput>{
        const useCaseInput = new GetCategoryUsecaseInput({
            name: !!type ? type :null,
        })
        return await this.getCategoryUseCase.run(useCaseInput)
    }

    @Get(':id')    
    async getCategoryById(@Param('id') id: string): Promise<GetCategoryByIdUseCaseOutput>{
        try {
            const useCaseInput = new GetCategoryByIdUseCaseInput({ id })
            return await this.getCategoryByIdUseCase.run(useCaseInput)
            
        } catch (error) {   
            throw new BadRequestException(JSON.parse(error.message))            
        }

    }
    
    @Post()
    async createCategory(@Body() input: CreateCategoryUseCaseInput): Promise<CreateCategoryUseCaseOutput>{
        const useCaseInput = new CreateCategoryUseCaseInput({ ...input})
        return await this.createCategoryUseCase.run(useCaseInput)
    }


    
}
