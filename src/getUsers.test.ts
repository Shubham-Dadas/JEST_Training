
const mockFetchData = jest.fn();
jest.mock('./getUsers', () => (
    {
        ...jest.requireActual('./getUsers'),
       fetchData: mockFetchData
    }
)
);

import { abc } from "./getUsers"

const fetchDataPromise = Promise.resolve([{
    id: 123,
    name: "Shubham"
}]);

mockFetchData.mockResolvedValue([{
    id: 123,
    name: "Shubham"
}])
 
test('Get Usernames', () => {
    // return fetchDataPromise.then(async () => {
        
    // })
// expect(await abc()).toEqual([{
//             id: 123,
//             name:"Shubham"
//         }])
    abc();
    expect(mockFetchData).toHaveBeenCalled();
    return fetchDataPromise.then(() => {
        expect(abc()).toEqual([{
            id: 123,
            name:"Shubham"
        }])
    })
});