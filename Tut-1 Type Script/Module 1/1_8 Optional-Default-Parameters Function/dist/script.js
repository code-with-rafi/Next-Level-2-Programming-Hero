"use strict";
console.log("Optional, Default Parameters in Function");
const concatName = (firstName, lastName) => {
    let concat = `${firstName} ${lastName}`;
    console.log(firstName + " " + lastName);
    // console.log(concat);
};
concatName("Mir", "Ahmed");
// Optional
const optName = (firstName, lastName) => {
    let concat = `${firstName} ${lastName}`;
    console.log(firstName + " " + lastName);
    // console.log(concat);
};
// optName("Mir" ,"Hossain");
optName("Mir"); //o/p : Mir Undefined
const removeUndName = (firstName, lastName = "") => {
    let concat = `${firstName} ${lastName}`;
    console.log(firstName + " " + lastName);
    // console.log(concat);
};
// optName("Mir" ,"Hossain");
removeUndName("Mir"); //o/p : Mir
// Default
let greetings = (fullName, greet) => {
    console.log(fullName + " " + greet);
};
greetings("Mir", "Good Afternoon");
let wish = (fullName, greet = "Hello") => {
    console.log(greet + " " + fullName);
};
wish("Mir");
wish("Mir", "Congratulations");
