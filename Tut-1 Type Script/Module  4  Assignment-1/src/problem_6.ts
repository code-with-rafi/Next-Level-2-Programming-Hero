type Role = "Admin" | "Editor" | "Subscriber";

interface User {
    id : number;
    name : string;
    role : Role;
}

const users:Array<User> = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

const pluckValues = <T,K extends keyof T>(items:T[],key: K):T[K][]=>{
    // console.log(items[0][key]);
    return items.map(item => item[key])
}

console.log(pluckValues(users,"name"));
console.log(pluckValues(users, "id"));