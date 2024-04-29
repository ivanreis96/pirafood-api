export default class CreateCategoryUseCaseOutput{
    id: string
    name: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(data:Partial<CreateCategoryUseCaseOutput>){
        Object.assign(this,data)
    }
}