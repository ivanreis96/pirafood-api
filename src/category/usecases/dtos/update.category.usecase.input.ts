export default class UpdateCategoryDetailsUseCaseInput{
    name: string;

    constructor(data: Partial<UpdateCategoryDetailsUseCaseInput>){
        Object.assign(this, data)
    }

}