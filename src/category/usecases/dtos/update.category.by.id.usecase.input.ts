import CreateCategoryUseCaseInput from "./create.category.usecase.input";

export default class UpdateCategoryByIdUseCaseInput extends CreateCategoryUseCaseInput{
    id: string

    constructor(data: Partial<UpdateCategoryByIdUseCaseInput>){
        super(data)
        Object.assign(this, data)
    }
    
}