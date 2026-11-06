type Id = number;

// interface ID = number;    //throw error. It supports only obj
// interface ID number;
interface ID {
    id : number;
} 

type Role = "Admin" | "Member";

// interface Role "Admin" | "Member";   //throw error
interface User {
    name : string;
    // id : number;     // comes from type ID
    id : Id;
    // role : "admin" | "member";
    role : Role;    // comes from type role
}

const user : User = {
    name : "Mir",
    id : 125,
    // role : "Member",
    role : "Admin"
}

console.log(user);


// ToDo : Interface can be extended
interface Animal{
    species : string;
}

// interface Cat {
//     breed : string;
// }

// const cat : Cat ={
//     breed : "Parsian"
// };
// console.log(cat.breed);
// // console.log(cat.species);

interface Cat extends Animal{
    breed : string;
}

let cat : Cat = {
    species : "Felix Catus",
    breed : "Parsian"
}   

console.log(cat.breed);
console.log(cat.species);

// ToDo : type -> intersection (&)
type Vehicle = {
    brand : string;
}
// type Car = {
//     model : string;
// }

// let car : Car = {
//     model : "toyota corolla",
//     // brand : "toyota"     // throw erroe -> brand not present type Car
// }

type Car = Vehicle & {
    model : string;
}

let car : Car = {
    model : "toyota corolla",
    brand : "toyota" 
}
console.log(car.model);
console.log(car.brand);


// Mergee interface
interface IEmp {
    id : number;
}
interface IEmp {
    name : string;
}

let userIemp : IEmp = {
    id : 1234,
    name : "Mire"
}

console.log(userIemp);

// Merge type not possible
type TEmp = {
    Id : number;
}

// type TEmp = {
//     name : string;       //merge not possible
// }