

function getEvenNumberUsingFilter(list:any[]):number[] {
    return list.filter(num=> num%2===0)
}
 
function getEvenNumberUsingForEach(list: any[]): number[]{

    return list.reduce((arr, item) => {
        if (typeof item === "number" && item % 2 == 0) {
            arr.push(item);
        }
        return arr;
    }, [])
}

function getEvenNumberUsingMap(list: number[]): number[]{
    const res: number[] = []
    
    list.map((item) => {
        if (typeof item === "number" && item % 2 == 0) {
            res.push(item);
        }
    })
    return res;
}

export  { getEvenNumberUsingFilter, getEvenNumberUsingForEach, getEvenNumberUsingMap }

