export default class CreateCategoryUseCaseInput{
    name: string;
    
    constructor(data:Partial<CreateCategoryUseCaseInput>){
        Object.assign(this,data)
    }
}