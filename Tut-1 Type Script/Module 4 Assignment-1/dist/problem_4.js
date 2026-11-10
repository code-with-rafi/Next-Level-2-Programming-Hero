const concatenateArrays = (...arrays) => {
    const combine = arrays.flat();
    return combine;
};
const strArr = concatenateArrays(["a", "b"], ["c", "d"]);
const numArr = concatenateArrays([1, 2], [3, 4], [5]);
console.log(strArr);
console.log(numArr);
export {};
