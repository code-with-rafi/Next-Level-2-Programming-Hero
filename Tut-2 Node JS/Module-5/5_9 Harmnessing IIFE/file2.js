// const value = require("./file1.js")
// console.log(value);

// const {a,b} = require("./file1");=
// console.log(a,b);

const {a:x,b:y} = require("./file1");
console.log(x,y);

const add = require("./utils/add");
console.log(add(x,y));