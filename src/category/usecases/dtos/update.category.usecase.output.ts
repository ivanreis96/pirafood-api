export default class UpdateCategoryDetailsUseCaseOutput{
    name: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<UpdateCategoryDetailsUseCaseOutput>){
        Object.assign(this, data)
    }

}