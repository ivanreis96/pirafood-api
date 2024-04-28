import { IsNotEmpty, IsString } from "class-validator";

export default class CreateCategoryControllerInput{

    @IsString()
    @IsNotEmpty()
    name:string;

}