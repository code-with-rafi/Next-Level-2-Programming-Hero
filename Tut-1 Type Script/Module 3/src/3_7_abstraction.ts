abstract class Employee {
    constructor(
        public name : string, 
        protected _baseSalary : number
    ){}

    get baseSalary():number{
        return this._baseSalary;
    }

    get salaryWithBonus():number{
        return this._baseSalary+5000;
    }

    set baseSalary(newSalary:number){
        newSalary < 0 
        ? (()=>{throw new Error("Salary can't be negative");})()
        :this._baseSalary=newSalary;
    }

    describe():string{
        return `${this.name} earns ${this.baseSalary}`;
    }

    abstract calculatePay():number;
    abstract getResources():string[];
}

class Developer extends Employee{
    calculatePay(){
        return this.baseSalary+2500;
    }
    getResources(){
        return ["ABC"];
    }

}

class Manager extends Employee{
    calculatePay(){
        return this.baseSalary+5000;
    }
    getResources(){
        return ["computer","human"]
    }
}


const maneger = new Manager("Mizan", 32000);
const developer = new Developer("Azizul", 25000);

console.log(maneger.name);
console.log(maneger.calculatePay());
console.log(developer["name"]);
console.log(developer.calculatePay());