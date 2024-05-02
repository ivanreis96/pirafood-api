import { Category } from "../schemas/category.schema";

export default class CategoryResponse{
    id:string;
    name:string;
    createdAt: Date;
    updatedAt:Date;

    static fromCategory(data:Category):CategoryResponse{
        return new CategoryResponse({
            id:data._id,
            name: data.name,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        });
    }

    constructor(data: Partial<CategoryResponse>){
        Object.assign(this,data)
    }
}