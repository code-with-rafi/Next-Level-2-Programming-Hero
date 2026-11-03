console.log("Rest Parameters in Function");

const sum = (...numbers : number[])=>{
 return numbers.reduce((total,sum)=>total+sum,0);
}

console.log(sum(1,2,3,4,5));

const logUserAction = (...arg : [name:string, age:number, isActive:boolean])=>{
    const [name,age,isActive] = arg;
    console.log(name + " is " + age + " activity " + isActive);
}
logUserAction("Mir",20,false);