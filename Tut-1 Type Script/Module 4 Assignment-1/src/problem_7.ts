class Employee{
    constructor(
        protected name:string, 
        private baseSalary : number
    ){}

    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee{
    constructor(name: string, baseSalary: number, private department: string){
        super(name,baseSalary);
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");

console.log(manager.getDetails());
console.log(manager.getRoleInfo());
