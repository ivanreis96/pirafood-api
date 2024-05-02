import { Category } from "../schemas/category.schema";
import Find from "../usecases/dtos/find.by.filter";


export default interface ICategoryRepository{
    get(): Promise<Category>;
    create(data: Partial<Category>): Promise<Category>
    find():Promise<Find>
    update(data: Partial<Category>): Promise<void>
}
