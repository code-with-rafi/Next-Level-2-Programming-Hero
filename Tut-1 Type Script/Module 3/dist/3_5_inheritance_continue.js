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
class Manager extends Employee {
    name;
    teamMember;
    constructor(name, _baseSalary, teamMember) {
        super(name, _baseSalary);
        this.name = name;
        this.teamMember = teamMember;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMember}`;
    }
    describeManegr() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
const manager = new Manager("Mizanur Rohan", 35000, 23);
console.log(manager.describe());
console.log(manager.describeWork());
console.log(manager.describeManegr());
export {};
