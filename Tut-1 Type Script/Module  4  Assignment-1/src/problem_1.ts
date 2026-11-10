console.log("multiply");

const multiplyValue = (value:number,multiplier?:number):number=>{
    if(multiplier){
        return value*multiplier;
    }
    return value*2;
}

console.log(multiplyValue(10,7));