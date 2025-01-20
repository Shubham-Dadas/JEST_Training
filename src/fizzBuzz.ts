function fizz_buzz(numbers: any[]): string {
  const result: (string | number)[] = [];

    for (const num of numbers) {
      if (num === null) {
          throw new Error("Invalid input: Expected a number but got null");
        }
        if (num === undefined) {
          throw new Error("Invalid input: Expected a number but got undefined");
      }
    if (typeof num !== 'number') {
      throw new Error(`Invalid input: Expected a number but got ${typeof num}`);
    }

    if (num % 15 === 0) {
      result.push('fizzbuzz');
    } else if (num % 3 === 0) {
      result.push('fizz');
    } else if (num % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(num);
    }
  }

  return result.join(', ');
}

export {fizz_buzz}