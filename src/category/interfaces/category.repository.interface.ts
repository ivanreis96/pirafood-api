import { Category } from "../schemas/category.schema";
import CreateCategoryUseCaseInput from "../usecases/dtos/create.category.usecase.input";


export default interface ICategoryRepository{
    create(input: CreateCategoryUseCaseInput);
    get():Promise<Category>;
    update(data: Category): Promise<void>
    create(data: Partial<Category>): Promise<Category>
}
