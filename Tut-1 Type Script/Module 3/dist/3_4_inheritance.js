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
class Manager extends Employee {
    teamMember;
    constructor(name, _baseSalary, teamMember) {
        super(name, _baseSalary);
        this.teamMember = teamMember;
    }
    descManager() {
        return `${this.name} has ${this.teamMember} members of a team.`;
    }
}
const manager = new Manager("Azim Uddin", 22000, 18);
console.log(manager);
console.log(manager.describe());
console.log(manager.descManager());
export {};
