import a from "./file1.mjs";
import {b,c} from "./file3.mjs"

console.log(a);
console.log(b,c);

// import d from "./file4.mjs";     //SyntaxError: The requested module './file4.mjs' does not provide an export named 'default'
// import {d} from "./file4.mjs";
import {d as value} from "./file4.mjs";
console.log(value);

import {add} from "./utils/utils.mjs";

console.log(add(b,c));