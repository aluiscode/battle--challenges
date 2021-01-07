import { IPlugin } from './IPlugin';

export class ChallengePrinter implements IPlugin{
  private relations = new Map();

  constructor(){
    this.relations.set(0, 'Musical');
    this.relations.set(6, 'Music');
    this.relations.set(10, 'TI');
  }

  /**
   * @param arr Array in wich will be applied the
   * challenge
   */
  public run(arr: Array<number>): void{
    arr.map( n => {
      console.log(this.eulerFizzBuzz(n));
    });
  }

  /**
   * The approach is getting since https://blog.antfeedr.com/posts/fizzbuzz.html
   * @param n is the value of the array in each iteration
   */
  public eulerFizzBuzz (n: number): number | string{
    const eulerFizzBuzz:number = n**4 % 15;
    if(eulerFizzBuzz === 1){
      return n;
    }
    return this.relations.get(eulerFizzBuzz)
  }
}
