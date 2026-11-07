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
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 2500;
    }
    getResources() {
        return ["ABC"];
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
    getResources() {
        return ["computer", "human"];
    }
}
const maneger = new Manager("Mizan", 32000);
const developer = new Developer("Azizul", 25000);
console.log(maneger.name);
console.log(maneger.calculatePay());
console.log(developer["name"]);
console.log(developer.calculatePay());
export {};
