import { IPlugin } from './IPlugin';

export class ChallengePrinter implements IPlugin{
  private relations = new Map();

  constructor(){
    this.relations.set(0, 'Musical');
    this.relations.set(6, 'Music');
    this.relations.set(10, 'TI');
  }

  public run(arr: Array<number>): void{
    arr.map( n => {
      const eulerFizzBuzz:number = n**4 % 15;
      if(eulerFizzBuzz === 1){
        console.log(n);
        return
      }
        console.log(this.relations.get(eulerFizzBuzz));
    });
  }
}