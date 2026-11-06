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

const wrapInArray = <T>(value:T)=>{
    return [value];
}
const strArr = wrapInArray<string>("abc");
const numArr = wrapInArray<number>(123);
const boolArr = wrapInArray<boolean>(false);

console.log(strArr);
console.log(numArr);
console.log(boolArr);

console.log(strArr.map((item)=>item.toUpperCase())); 
// console.log(numArr.map((item)=>item.toUpperCase())); // error : num can't convert in uppercase




// interface UserResponse {
//     data : {
//         name : string;
//         role : string;
//     };
//     success : boolean;
//     statusCode : number;
// }

// interface BlogResponse {
//     data : {
//         title : string;
//         desc : string;
//     };
//     success : boolean;
//     statusCode : number;
// }

interface ApiResponse <T> {
    data : T;
    success : boolean;
    statusCode : number;
}

interface User {
    name : string;
    role : string;
}

interface Blog {
    title : string;
    desc : string;
    date : string;
}

type UserResponse = ApiResponse<User>
type BlogResponse = ApiResponse<Blog>

const userRes : UserResponse = {
    data : {
        name : "Mir",
        role : "coder"
    },
    success : true,
    statusCode : 200,
};

const blogRes : BlogResponse = {
    data : {
        title : "amc",
        desc : "erhgaq",
        date : "12-12-12"
    },
    success : true,
    statusCode : 200
}

console.log(userRes);
console.log(blogRes);