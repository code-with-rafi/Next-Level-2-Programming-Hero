const concatenateArrays = <T>(...arrays: T[][]):T[]=>{
    const combine = arrays.flat();
    return combine;
}

const strArr = concatenateArrays<string>(["a", "b"], ["c", "d"]);
const numArr = concatenateArrays<number>([1, 2], [3, 4], [5])

console.log(strArr);
console.log(numArr);