// Literal Type
type Status = "pending";
const status:Status = "pending";

// console.log(status);

// Basic Union
type Identity = string | number;
// let id = 1224;
let id = "asd1234";
id = "1243145"
console.log(id);

// Literal Union
type Role = "user" | "admin";

// let userRole : Role = "user";
let userRole : Role = "admin";
// let userRole : Role = "maneger";    // throw error : there is no Role named manager
// console.log(userRole);


// Object Uniio
type Admin = {
    id : number;
    role : "admin";
    privileges : string[];
}

type Member = {
    id : number;
    role : "member";
    plans : string[];
}

type User = Admin | Member;

// const user : User = {
//     id : 123,
//     role : "admin",
//     privileges : ["Apv","aerg"]
// }

const user : User = {
    id : 12323,
    role : "member",
    plans : ['aer','awet5']
}
// console.log(user);