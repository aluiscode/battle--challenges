import { IArrayOperationable } from './plugins/IArrayOperationable';

type Config = {
  arr: Array<number>,
  operations: Array<IArrayOperationable>,
}

export class ChallengesOverArrays{
  private array: Array<number>;
  private operations: Array<IArrayOperationable>;

  /**
   * Create a new array from 1 to end, after that executed
   * all plugins that operate on the array
   * @param {number} end The last value in the array
   */
  constructor(config: Config){
    this.array = config.arr;
    this.operations  = config.operations || [];
    this.runOperations();
  }

  /**
   * Excute run method of each element in plugins array
   */
  private runOperations(): void{
    this.operations.forEach(operation => {
      operation.run(this.array);
    });
  }
}
