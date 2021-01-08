import { EulerMusicalTI } from '../plugins/EulerMusicalTI';
import { result } from '../utils/mocks/ArrayRepsonse';

describe('Test ChallengePrinter', () =>{
  const fizzbuzz = new EulerMusicalTI();

  test('Test', () => {
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((n,i)=>{
      expect(fizzbuzz.eulerOperation(n)).toBe(result[i]);
    })
  });
});
