import { forEach } from "./forEach";
const mockCallback = jest.fn(x => 42 + x);
console.log(mockCallback.mock)
test('forEach mock function', () => {
  forEach([0, 1], mockCallback);
  
  expect(mockCallback.mock.calls).toHaveLength(2);
console.log("1",mockCallback.mock)
 
  expect(mockCallback.mock.calls[0][0]).toBe(0);

 console.log("2",mockCallback.mock)
  expect(mockCallback.mock.calls[1][0]).toBe(1);

 
  expect(mockCallback.mock.results[0].value).toBe(42);
});