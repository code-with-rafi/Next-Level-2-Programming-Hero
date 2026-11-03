console.log("Object, Type Alias and Interface");

const User : {
    name : string,
    age : number,
    isActive : boolean,
    action : ()=>void,
    badges : string[],   
} = {
    name : "Mir",
    age : 12,
    isActive : true,
    action : ()=>console.log("Hello"),
    badges : ["Abc", "def"]
}
// console.log(User);

// type
type userName = string;

type address = {
    city : string,
    holdinNumber : number
};

type TUser = {
    // name : string,
    name : userName,
    age : number,
    isActive : boolean,
    action : ()=>void,
    badges : string[],  
};

type TUser2 = {
    // name : string,
    name : userName,
    age : number,
    isActive : boolean,
    action : ()=>void,
    badges : string[], 
    address : address 
};

// create user

const t_User : TUser ={
    name : "Mir",
    age : 12,
    isActive : true,
    action : ()=>console.log("Hello"),
    badges : ["Abc", "def"]
}
// console.log(t_User);

const t_User2 : TUser2 ={
    name : "Hela",
    age : 22,
    isActive : false,
    action : ()=>console.log("Hi"),
    badges : ["Null", "Apply"],
    address : {
        city : "Rajsahi",
        holdinNumber : 5665
    }
}
// console.log(t_User2);


// Interface
interface IUser {
    name : userName,
    age : number,
    isActive : boolean,
    action : ()=>void,
    badges : string[], 
    address : address 
}

// create user
const i_User : IUser ={
    name : "Hela",
    age : 22,
    isActive : false,
    action : ()=>console.log("Hi"),
    badges : ["Null", "Apply"],
    address : {
        city : "Rajsahi",
        holdinNumber : 5665
    }
}
console.log(i_User);


// type
// type userName = string; //can create in type

//interface
// interface userName string //can't create