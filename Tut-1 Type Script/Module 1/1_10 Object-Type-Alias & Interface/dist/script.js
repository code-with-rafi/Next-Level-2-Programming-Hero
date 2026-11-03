"use strict";
console.log("Object, Type Alias and Interface");
const User = {
    name: "Mir",
    age: 12,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["Abc", "def"]
};
// create user
const t_User = {
    name: "Mir",
    age: 12,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["Abc", "def"]
};
// console.log(t_User);
const t_User2 = {
    name: "Hela",
    age: 22,
    isActive: false,
    action: () => console.log("Hi"),
    badges: ["Null", "Apply"],
    address: {
        city: "Rajsahi",
        holdinNumber: 5665
    }
};
// create user
const i_User = {
    name: "Hela",
    age: 22,
    isActive: false,
    action: () => console.log("Hi"),
    badges: ["Null", "Apply"],
    address: {
        city: "Rajsahi",
        holdinNumber: 5665
    }
};
console.log(i_User);
// type
// type userName = string; //can create in type
//interface
// interface userName string //can't create
