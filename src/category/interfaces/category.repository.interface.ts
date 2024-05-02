import { Category } from "../schemas/category.schema";
import Find from "../usecases/dtos/find.by.filter";
import GetCategoryUseCaseOutput from "../usecases/dtos/get.category.usecase.output";
export default interface ICategoryRepository{
    create(data: Partial<Category>): Promise<Category>
    find():Promise<Find>
}
