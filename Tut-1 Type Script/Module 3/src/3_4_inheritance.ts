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

class Manager extends Employee {
    teamMember : number;
    constructor(name:string,_baseSalary:number,teamMember:number) {
        super(name,_baseSalary)
        this.teamMember = teamMember
    }
    descManager():string{
        return `${this.name} has ${this.teamMember} members of a team.`
    }

}

const manager = new Manager("Azim Uddin", 22000, 18);
console.log(manager);
console.log(manager.describe());
console.log(manager.descManager());