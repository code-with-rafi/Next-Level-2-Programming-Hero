// top types

// let x : any = "hello world";
let x : any = 12456;
console.log(x.length);

let y : unknown = "hello world";
// console.log(y.length);   //throw error 


// core types

let some : any;
let num : number = 1243;
some = num;
// console.log(some);

// let some : void;
// let num : number = 1243;
// some = num   // error : core tcan't assign in type : unit or nullish


// Literal Type
type  Status = "pending" | "success";
let someStatus:string;
let status : Status = "pending";
someStatus = status;
console.log(someStatus);


// Unit Types
const great = ()=>{
    console.log("hi dear");
}
some = great()
// console.log(some);
// const greeting : string = great()    // error : void can't assign in type : string


// NUllish Types
interface User {
    name : string;
}

// const curretUser = null;
// const curretUser : User = null;     // error : here null is used for value but TS also conside this value as type : null

type loggedInUser = User | null;
const curretUser : loggedInUser = null;


// sub-type of unit type
const anotherGreet = ():undefined =>{
    console.log("hello sub-type data");
    // return undefined;
}

// const greet = anotherGreet();   // return undefined;
const greet : void = anotherGreet();   // error not showing. undefine is the sub-set of void
console.log(greet); 


// Bottom Type -> can assign with any types

// let a : never = 32;  // error can't assign number in type : never

const gerError = (msg:string)=>{
    throw new Error(msg);
}

const b : string = gerError("Abc");
console.log(b);

const c : null = gerError("Abc");
console.log(c);

const d : number = gerError("123454");
console.log(d);

