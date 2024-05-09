import CategoryResponse from "src/category/dtos/category.response";

export default class GetCategoryUseCaseOutput{
    items:CategoryResponse[];

    constructor(data:Partial<GetCategoryUseCaseOutput>){
        Object.assign(this,data)
    }
}