import { fizz_buzz } from './fizzBuzz';

describe('FizzBuzz Function', () => {

  test('For numeric input', () => {
    const input = [1, 100, 500, 23, 45];
    const expectedOutput = "1, buzz, buzz, 23, fizzbuzz";
    expect(fizz_buzz(input)).toEqual(expectedOutput);
  });
  
  test('For mixed numbers and string inputs', () => {
    const input = [1, 2, 'Hello World', 100, 'JavaScript'];
    expect(() => fizz_buzz(input)).toThrow(
      'Invalid input: Expected a number but got string'
    );
  });
    
    test('For mixed numbers and boolean inputs', () => {
    const input = [1, 2, false, 100];
    expect(() => fizz_buzz(input)).toThrow(
      'Invalid input: Expected a number but got boolean'
    );
    });
    
     test('For mixed numbers and null inputs', () => {
    const input = [1, 2, null, 100,null];
    expect(() => fizz_buzz(input)).toThrow(
      'Invalid input: Expected a number but got null'
    );
  });

      test('For mixed numbers and undefined inputs', () => {
    const input = [1, 2,undefined, false, 100,null];
    expect(() => fizz_buzz(input)).toThrow(
      'Invalid input: Expected a number but got undefined'
    );
  });


  test('For empty array input', () => {
    const input: number[] = [];
    const expectedOutput = '';
    expect(fizz_buzz(input)).toEqual(expectedOutput);
  });

  test('For negative numbers input', () => {
    const input = [-3, -5, -15, -4, -8];
    const expectedOutput = 'fizz, buzz, fizzbuzz, -4, -8';
    expect(fizz_buzz(input)).toBe(expectedOutput);
  });
    
});
