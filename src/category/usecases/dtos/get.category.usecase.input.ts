export default class GetCategoryUseCaseInput{
    name?:string

    constructor(data:Partial<GetCategoryUseCaseInput>){
        Object.assign(this,data)
    }
}