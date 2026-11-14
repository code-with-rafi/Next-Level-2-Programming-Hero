var a = 10;
var a = 20;
console.log(a);

let b = 13;
// let b = 13;     //Cannot redeclare block-scoped variable 'b'.
b = 34;
console.log(b);

(()=>{
    let d = 18;
    console.log(d);
})();

(()=>{
    let d = 23;
    console.log(d);
})();