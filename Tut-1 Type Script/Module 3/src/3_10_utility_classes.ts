// Utility Types

//Partial 
interface User {
    id : string;
    name : string;
    email : string
}

interface optionalUser {
    id ?: string;
    name ?: string;
    email ?: string
}

// const updateProfile = (id:string, data:User)=>{
//     // some backend logic
// }

// updateProfile("asdf",{name : "Minhaz"})     // can't change => Type '{ name: string; }' is missing the following properties from type 'User': id, email


// const updateProfile = (id:string, data:optionalUser)=>{
//     // some backend logic
// }

// updateProfile("asdf",{name : "Minhaz"})     // can change...but creates another Optional User


// type partialUser = Partial<User>
const updateProfile = (id:string, data:Partial<User>)=>{
    // some backend logic
}

updateProfile("asdf",{name : "Minhaz"})  // can change..no requires another Optional User


//Required
interface Config{
    api ?:string;
    timeout ?: number;
}

const initalize = (config:Required<Config>)=>{
    // backend logic
}

// console.log(initalize({api:"https://apicom"}));      //error: requires 2 data argument
console.log(initalize({api:"https://apicom",timeout:3000})); 


// Pick
interface Product{
    id : number;
    name : string;
    price : number;
    desc : string
}

// const preview : Product = {
//     name : "abd",
//     desc : "weqweta"           
// }   // Error : Type '{ name: string; desc: string; }' is missing the following properties from type 'Product': id, price

type productPreview = Pick<Product, "name" | "desc">;
const preview : productPreview ={
    name : "abd",
    desc : "weqweta" 
}



//Omit
interface Employee {
    id : number;
    name : string;
    salary : number;
    nid : string
}

// const employee : Employee = {
//     id : 435,
//     name : "bob",
//     salary : 12000,
//     nid : "345646125"
// }

type EmployeeAccess = Omit<Employee, "salary" | "nid">

const employee : EmployeeAccess = {
    id : 435,
    name : "bob",
    // salary : 12000,
    // nid : "345646125" 
}


// Record
type Environment = "development" | "staging" | "production";
const ApiUrls : Record<Environment,string> ={
    development : "http://localhost:3000",
    staging : "https://staging.api.com",
    production : "https://api.com",
}