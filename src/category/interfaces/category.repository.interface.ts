import { Category } from "../schemas/category.schema";
import GetCategoryUseCaseOutput from "../usecases/dtos/get.category.usecase.output";


export default interface ICategoryRepository{
    create(data: Partial<Category>): Promise<Category>
    find(data?:Partial<Category>):Promise<GetCategoryUseCaseOutput>
    update(data: Partial<Category>): Promise<void>
}
