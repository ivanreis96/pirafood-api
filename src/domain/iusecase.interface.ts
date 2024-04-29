export interface IUseCase<input, Output>{
    run(input:input): Promise<Output>
}