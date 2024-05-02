import { Category } from "src/category/schemas/category.schema";

export default class Find{
    items:Category[]
    

    constructor(data:Partial<Find>){
        Object.assign(this,data)
    }
}