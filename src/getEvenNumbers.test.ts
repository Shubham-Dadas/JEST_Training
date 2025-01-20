import { getEvenNumberUsingFilter, getEvenNumberUsingForEach, getEvenNumberUsingMap } from "./getEvenNumbers"

describe("TestCases for Extracting Even Numbers", () => {
    const List: any = [1, 2, 3, 4, 5, 6, 7, 8, 10, null, undefined, "12"];
    
    test("Extacting even numbers using filter", () => {
        expect(getEvenNumberUsingFilter(List)).toEqual([2,4,6,8,10])
    })
    
    test("Extacting even numbers using map", () => {
        expect(getEvenNumberUsingMap(List)).toEqual([2,4,6,8,10])
    })
    
    test.only("Extacting even numbers using forEach", () => {
        expect(getEvenNumberUsingForEach(List)).toEqual([2,4,6,8,10])
     })
    
    
})

describe("TestCases for Extracting Even Numbers", () => {
    
    
})