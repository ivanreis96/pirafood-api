export default class GetCategoryByIdUseCaseOutput{
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<GetCategoryByIdUseCaseOutput>){
        Object.assign(this, data);
    }

}