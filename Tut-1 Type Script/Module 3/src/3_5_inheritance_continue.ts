class Employee {
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
}

class Manager extends Employee {
    constructor(
        public name : string,
        _baseSalary : number,
        public teamMember : number
    ){
        super(name,_baseSalary);
    }

    describeWork():string{
        return `${this.name} manages ${this.teamMember}`;
    }
    describeManegr():string{
        return `${this.name} earns ${this.baseSalary}`
    }
}

const manager = new Manager ("Mizanur Rohan", 35000, 23)
console.log(manager.describe());
console.log(manager.describeWork());
console.log(manager.describeManegr());