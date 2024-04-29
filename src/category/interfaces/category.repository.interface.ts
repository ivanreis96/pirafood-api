import { Category } from "../schemas/category.schema";


export default interface ICategoryRepository{
    get():Promise<Category>;
    update(data: Category): Promise<void>
}