// Encapsulation : Protect a stae and change it through method
// Access Modifier
/*
    1. Public
    2. Private
    3. Protected
    4. Readonly 
*/

/*
class Employee {
    name : string;
    baseSalary : number;

    constructor(name:string, baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary
    }
}
*/

class Employee {
    constructor(
        public name : string, 
        // private _baseSalary : number
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
}

const employee1 = new Employee("Mir Ahmed", 12300)
console.log(employee1);
console.log(employee1.baseSalary);
console.log(employee1.salaryWithBonus);

employee1.baseSalary = 18000;
// employee1.baseSalary = -5000;
console.log(employee1.baseSalary);
console.log(employee1.describe());
console.log(Employee);