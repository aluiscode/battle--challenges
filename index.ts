import { ChallengesOverArrays } from './src/ChallengesOverArrays';
import { EulerMusicalTI } from './src/plugins/EulerMusicalTI';

let array: Array<number> = [];

for(let i= 0; i<100; i++){
  array[i]= i+1;
}

const music = new ChallengesOverArrays({
  arr: array,
  operations: [ new EulerMusicalTI ]
});
