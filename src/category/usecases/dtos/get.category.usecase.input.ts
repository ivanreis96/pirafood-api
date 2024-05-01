export default class GetCategoryUsecaseInput{
    name?:string

    constructor(data:Partial<GetCategoryUsecaseInput>){
        Object.assign(this,data)
    }
}