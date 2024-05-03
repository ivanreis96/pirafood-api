import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import CategoryTokens from "../category.tokens";
import ICategoryRepository from "../category.repository";
import GetCategoryUseCaseInput from "./dtos/get.category.usecase.input";
import GetCategoryUseCaseOutput from "./dtos/get.category.usecase.output";
import CategoryResponse from "../dtos/category.response";


@Injectable()
export default class GetCategoryUseCase implements IUseCase<GetCategoryUseCaseInput,GetCategoryUseCaseOutput>{
    constructor(
        @Inject(CategoryTokens.categoryRepository)
        private readonly categoryRepository:ICategoryRepository,

    ){}

    async run(input:GetCategoryUseCaseInput):Promise<GetCategoryUseCaseOutput>{
        const queryResponse = await this.categoryRepository.find()
        const categoryResponseList:CategoryResponse[]=[];

        for (const currentCategory of queryResponse.items){
            categoryResponseList.push(CategoryResponse.fromCategory(currentCategory))
        }

        return new GetCategoryUseCaseOutput({
            items:categoryResponseList,
        })
         
    }
}