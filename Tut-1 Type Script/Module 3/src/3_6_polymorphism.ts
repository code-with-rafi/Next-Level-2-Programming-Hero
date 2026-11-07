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

    calculatePay(taxRate:number){
        // const amount = this.baseSalary - ((this.baseSalary*taxRate)/100);

        // return `Your sala is ${this.baseSalary}. After applying ${taxRate}% tax, your salary is ${amount}.\nSlary = ${this.baseSalary} - ${((this.baseSalary*taxRate)/100)}\n\t= ${amount}`;
        return this.baseSalary - ((this.baseSalary*taxRate)/100);
    }
}

class Manager extends Employee{
    override calculatePay(){
        return this.baseSalary+5000;
    }
}

class Developer extends Employee{
    constructor(
        public name : string,
        _baseSalary : number,
        public type : string
    ){
        super(name,_baseSalary);
    }
    override calculatePay(taxRate:number){
        return (this.baseSalary+5000) - ((this.baseSalary*taxRate)/100);
    }
}

const employee = new Employee("Rohim", 18000);
const maneger = new Manager("Mizan", 32000);
const developer = new Developer("Azizul", 25000, "Software");

console.log(employee.baseSalary);
console.log(employee.calculatePay(10));
console.log(maneger.calculatePay());
console.log(developer.calculatePay(12));