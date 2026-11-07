// Utility Types
// const updateProfile = (id:string, data:User)=>{
//     // some backend logic
// }
// updateProfile("asdf",{name : "Minhaz"})     // can't change => Type '{ name: string; }' is missing the following properties from type 'User': id, email
// const updateProfile = (id:string, data:optionalUser)=>{
//     // some backend logic
// }
// updateProfile("asdf",{name : "Minhaz"})     // can change...but creates another Optional User
// type partialUser = Partial<User>
const updateProfile = (id, data) => {
    // some backend logic
};
updateProfile("asdf", { name: "Minhaz" }); // can change..no requires another Optional User
const initalize = (config) => {
    // backend logic
};
// console.log(initalize({api:"https://apicom"}));      //error: requires 2 data argument
console.log(initalize({ api: "https://apicom", timeout: 3000 }));
const preview = {
    name: "abd",
    desc: "weqweta"
};
const employee = {
    id: 435,
    name: "bob",
    // salary : 12000,
    // nid : "345646125" 
};
const ApiUrls = {
    development: "http://localhost:3000",
    staging: "https://staging.api.com",
    production: "https://api.com",
};
export {};
