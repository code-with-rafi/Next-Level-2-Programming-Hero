// Some caveat of type guard
const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
        // console.log("Empty value");
    }
};
printAll(null);
// Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
// inEquality
const print = (x) => {
    if (x != null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
        }
        else {
            console.log(x);
        }
    }
    else {
        console.log(" ");
    }
};
print(null);
const move = (animal) => {
    // animal.fly()     //error 
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    else {
        animal.swim();
    }
};
// "instanceof" check
const date = new Date();
const err = new Error("Something went wrong");
console.log(date instanceof Date);
console.log(err instanceof Error);
console.log(date instanceof Error);
console.log(err instanceof Date);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-16-1971");
showDate(new Date("12-16-1971"));
const getArea = (shape) => {
    if (shape.kind == "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
