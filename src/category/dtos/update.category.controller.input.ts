import { IsNotEmpty, IsString } from "class-validator";

export default class UpdateCategoryControllerInput{
    @IsString()
    @IsNotEmpty()
    name:string;
}