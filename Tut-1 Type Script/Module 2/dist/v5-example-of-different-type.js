// top types
// let x : any = "hello world";
let x = 12456;
console.log(x.length);
let y = "hello world";
// console.log(y.length);   //throw error 
// core types
let some;
let num = 1243;
some = num;
let someStatus;
let status = "pending";
someStatus = status;
console.log(someStatus);
// Unit Types
const great = () => {
    console.log("hi dear");
};
some = great();
const curretUser = null;
// sub-type of unit type
const anotherGreet = () => {
    console.log("hello sub-type data");
    // return undefined;
};
// const greet = anotherGreet();   // return undefined;
const greet = anotherGreet(); // error not showing. undefine is the sub-set of void
console.log(greet);
// Bottom Type -> can assign with any types
// let a : never = 32;  // error can't assign number in type : never
const gerError = (msg) => {
    throw new Error(msg);
};
const b = gerError("Abc");
console.log(b);
const c = gerError("Abc");
console.log(c);
const d = gerError("123454");
console.log(d);
export {};
