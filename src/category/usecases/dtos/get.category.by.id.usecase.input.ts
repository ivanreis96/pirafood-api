export default class GetCategoryByIdUseCaseInput{
    id: string
    constructor(data: Partial<GetCategoryByIdUseCaseInput>){
        Object.assign(this, data)
    }

}