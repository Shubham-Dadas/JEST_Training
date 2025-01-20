import { sum } from "./sum"

describe("testSumFunction", () => {
    xit("checkSum", () => {
         expect(sum(2,8)).toBe(10)
    })
    
    it("checkSum 1", () => {
         expect(sum(2,8)).toBe(10)
    })
    
    it("checkSum 2", () => {
         expect(sum(2,8)).toBe(10)
    })
    
    it("checkSum 3", () => {
         expect(sum(2,8)).toBe(10)
     })
})

describe(
    "test Truthiness",
    () =>
    {
         test('null', () => {
    const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
    }
)

describe(
    "zero",
    () =>
    {
         test('null', () => {
     const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
    }
)