// const wrapInArray = (value:any)=>{
// // const wrapInArray = (value: string | number)=>{
//     return [value];
// }
// const strArr = wrapInArray("abc");
// const numArr = wrapInArray(123);
// const boolArr = wrapInArray(false); // error : when value:any change to string | number
// console.log(strArr);
// console.log(numArr);
// console.log(boolArr);
// console.log(strArr.map((item)=>item.toUpperCase())); 
// console.log(numArr.map((item)=>item.toUpperCase())); // No error: though num can't convert in uppercase.
// // console.log(numArr.map((item)=>item.toUpperCase())); // error : when value:any change to string | number

const wrapInArray = (value) => {
    return [value];
};

const strArr = wrapInArray("abc");
const numArr = wrapInArray(123);
const boolArr = wrapInArray(false);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strArr.map((item) => item.toUpperCase()));
const userRes = {
    data: {
        name: "Mir",
        role: "coder"
    },
    success: true,
    statusCode: 200,
};
const blogRes = {
    data: {
        title: "amc",
        desc: "erhgaq",
        date: "12-12-12"
    },
    success: true,
    statusCode: 200
};
console.log(userRes);
console.log(blogRes);
export {};
