class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
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
    calculatePay(taxRate) {
        // const amount = this.baseSalary - ((this.baseSalary*taxRate)/100);
        // return `Your sala is ${this.baseSalary}. After applying ${taxRate}% tax, your salary is ${amount}.\nSlary = ${this.baseSalary} - ${((this.baseSalary*taxRate)/100)}\n\t= ${amount}`;
        return this.baseSalary - ((this.baseSalary * taxRate) / 100);
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    name;
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.name = name;
        this.type = type;
    }
    calculatePay(taxRate) {
        return (this.baseSalary + 5000) - ((this.baseSalary * taxRate) / 100);
    }
}
const employee = new Employee("Rohim", 18000);
const maneger = new Manager("Mizan", 32000);
const developer = new Developer("Azizul", 25000, "Software");
console.log(employee.baseSalary);
console.log(employee.calculatePay(10));
console.log(maneger.calculatePay());
console.log(developer.calculatePay(12));
export {};
