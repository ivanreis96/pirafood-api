import { CustomError } from "./custom.error";

export default class CategoryNotFoundError extends CustomError{
    constructor() {
        super('Category Not Found', '0001');
    }
}