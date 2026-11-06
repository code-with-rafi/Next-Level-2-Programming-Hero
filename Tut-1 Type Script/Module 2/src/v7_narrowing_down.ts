// typeof

// let x = 123;
// let x='1234';
// let x=["abc"];
let x=null;

// console.log(typeof x);
// console.log(typeof x === "null"); //false

//type guard
const print = (value : string | number) =>{
    // return value.toUpperCase();  // error
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    // else if(typeof value === "nuumber"){
    //     return value;
    // }
    else{
        return value;
    }
}

// console.log(print("hello"));
// console.log(print(1234));


// Truthiness
type User = {
    name : string;
    address ?: {
        street : string;
    };
} | null;

const loggedInUser : User = {
    name : "mir",
    address : {
        street : "anv-123",
    },
};

const showAddress = (user : User)=>{
    // console.log(user.address.street); // error : user possibly
    // console.log(user!.address.street);
    // if(user){
    //     console.log(user.address.street);
    //     return;
    // }

    if(user && user.address){
        console.log(user.address.street);
        return;
    }
    throw new Error("user not found");
}

showAddress(loggedInUser);