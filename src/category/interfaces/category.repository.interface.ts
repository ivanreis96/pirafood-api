import { Category } from "../schemas/category.schema";

export default interface ICategoryRepository{
    create(data: Partial<Category>): Promise<Category>
    // create(input: CreateCategoryUseCaseInput);
    get():Promise<Category>;
    update(data: Category): Promise<void>
}
