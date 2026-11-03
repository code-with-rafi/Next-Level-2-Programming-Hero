console.log("Optional, Default Parameters in Function");


const concatName = (firstName : string, lastName : string)=>{
    let concat = `${firstName} ${lastName}`;
    console.log(firstName + " " + lastName);
    // console.log(concat);
}

concatName("Mir","Ahmed");

// Optional
const optName = (firstName : string, lastName ?: string)=>{
    let concat = `${firstName} ${lastName}`;
    console.log(firstName + " " + lastName);
    // console.log(concat);
}

// optName("Mir" ,"Hossain");
optName("Mir"); //o/p : Mir Undefined

const removeUndName = (firstName : string, lastName : string = "")=>{
    let concat = `${firstName} ${lastName}`;
    console.log(firstName + " " + lastName);
    // console.log(concat);
}

// optName("Mir" ,"Hossain");
removeUndName("Mir"); //o/p : Mir

// Default
let greetings = (fullName : string, greet : string)=>{
    console.log(fullName+" "+greet);
}
greetings("Mir", "Good Afternoon");


let wish = (fullName : string, greet : string = "Hello")=>{
    console.log(greet+" "+fullName);
}
wish("Mir");
wish("Mir", "Congratulations");