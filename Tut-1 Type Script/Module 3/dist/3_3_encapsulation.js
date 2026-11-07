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
    name;
    _baseSalary;
    constructor(name, 
    // private _baseSalary : number
    _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        newSalary < 0
            ? (() => { throw new Error("Salary can't be negative"); })()
            : this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
const employee1 = new Employee("Mir Ahmed", 12300);
console.log(employee1);
console.log(employee1.baseSalary);
console.log(employee1.salaryWithBonus);
employee1.baseSalary = 18000;
// employee1.baseSalary = -5000;
console.log(employee1.baseSalary);
console.log(employee1.describe());
console.log(Employee);
export {};
