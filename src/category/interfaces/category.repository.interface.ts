import { Category } from "../schemas/category.schema";
import Find from "../usecases/dtos/find.by.filter";


export default interface ICategoryRepository{
    getById(id: string): Promise<Category>;
    updateById(data: Partial<Category>): Promise<void>;
    create(data: Partial<Category>): Promise<Category>;
    find():Promise<Find>;
}
