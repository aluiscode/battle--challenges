import { IPlugin } from "./plugins/IPlugin.ts";

type Config = {
  end: number,
  plugins: Array<IPlugin>,
}

export class Music{
  private start: number = 0;
  private end: number;
  public array: Array<number> = [];
  private plugins: Array<IPlugin>;

  /**
   * Create a new array from 1 to end, after that executed
   * all plugins that operate on the array
   * @param {number} end The last value in the array
   */
  constructor(config: Config){
    this.end = config.end;
    this.plugins  = config.plugins || [];
    this.buildArray();
    this.initPlugins();
  }

  /**
   * Build the array from 1 to end value
   */
  private buildArray(): void{
    for(let i = this.start; i<this.end; i++){
      this.array[i]=i +1;
    }
  }

  /**
   * Excute run method of each element in plugins array
   */
  private initPlugins(): void{
    this.plugins.forEach(plugin => {
      plugin.run(this.array);
    });
  }
}
