"use strict";
console.log("Rest Parameters in Function");
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
console.log(sum(1, 2, 3, 4, 5));
const logUserAction = (...arg) => {
    const [name, age, isActive] = arg;
    console.log(name + " is " + age + " activity " + isActive);
};
logUserAction("Mir", 20, false);
