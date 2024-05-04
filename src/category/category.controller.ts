import { Body, Controller, Inject, Post, Query,Get, Put, Param, BadRequestException } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreateCategoryUseCaseInput from './usecases/dtos/create.category.usecase.input';
import CreateCategoryUseCaseOutput from './usecases/dtos/create.category.usecase.output';
import CategoryTokens from './category.tokens';
import GetCategoryUseCaseOutput from './usecases/dtos/get.category.usecase.output';
import GetCategoryByIdUseCaseInput from './usecases/dtos/get.category.by.id.usecase.input';
import GetCategoryByIdUseCaseOutput from './usecases/dtos/get.category.by.id.usecase.output';
import GetCategoryUseCaseInput from './usecases/dtos/get.category.usecase.input';
import UpdateCategoryByIdUseCaseInput from './usecases/dtos/update.category.by.id.usecase.input';
import UpdateCategoryByIdUseCaseOutput from './usecases/dtos/update.category.by.id.usecase.output';
import UpdateCategoryControllerInput from './dtos/update.category.controller.input';

@Controller('category')
export class CategoryController {

    @Inject(CategoryTokens.createCategoryUseCase)
    private readonly createCategoryUseCase: IUseCase<CreateCategoryUseCaseInput, CreateCategoryUseCaseOutput>

    @Inject(CategoryTokens.getCategoryUseCase)
    private readonly getCategoryUseCase:IUseCase<GetCategoryUseCaseInput, GetCategoryUseCaseOutput>

    @Inject(CategoryTokens.getCategoryByIdUseCase)
    private readonly getCategoryByIdUseCase:IUseCase<GetCategoryByIdUseCaseInput, GetCategoryByIdUseCaseOutput>
    
    @Inject(CategoryTokens.updateCategoryByIdUseCase)
    private readonly updateCategoryByIdUseCase:IUseCase<UpdateCategoryByIdUseCaseInput, UpdateCategoryByIdUseCaseOutput>


    @Get()
    async getCategory(
        @Query('name') type?:string
    ):Promise<GetCategoryUseCaseOutput>{
        const useCaseInput = new GetCategoryUseCaseInput({
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

    @Put(':id')
    async updateCategory(@Body() input: UpdateCategoryControllerInput, @Param('id') id: string): Promise<UpdateCategoryByIdUseCaseOutput>{
        try {
            const useCaseInput = new UpdateCategoryByIdUseCaseInput({
                ...input,
                id
            })

            return await this.updateCategoryByIdUseCase.run(useCaseInput)
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
