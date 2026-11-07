class Employee {
    name;
    baseSalary;
    constructor(name, baseSlary) {
        this.name = name;
        this.baseSalary = baseSlary;
    }
}
const employee1 = new Employee("Mir", 12000);
const employee2 = new Employee("Mizan", 15000);
console.log(employee1);
console.log(employee1["name"]);
console.log(employee2);
console.log(employee2.baseSalary);
console.log(employee1 instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
