import { IArrayOperationable } from './IArrayOperationable';

export class EulerMusicalTI implements IArrayOperationable{
  private setResponses = new Map();

  constructor(){
    this.setResponses.set(0, 'Musical');
    this.setResponses.set(6, 'Music');
    this.setResponses.set(10, 'TI');
  }

  /**
   * @param arr Array in wich will be applied the
   * challenge
   */
  public run(arr: Array<number>): void{
    arr.map( n => {
      console.log(this.eulerOperation(n));
    });
  }

  /**
   * The approach is getting from https://blog.antfeedr.com/posts/fizzbuzz.html
   * @param n is the value of the array in each iteration
   */
  public eulerOperation (n: number): number | string{
    const eulerFormule:number = n**4 % 15;
    if(eulerFormule === 1){
      return n;
    }
    return this.setResponses.get(eulerFormule)
  }
}
