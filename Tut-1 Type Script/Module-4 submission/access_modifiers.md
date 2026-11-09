## Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP

Object Oriented Programming (OOP) is a programmin paradism that organizes code into objects that contain both data (attribute) and behaviour (methods). Key concepts of OOP are:

1. Class : A blue prints of creating an object
2. Object : An instance of class with specific data and behavior
3. Attributes : Variable that stores data of object
4. Methods : Is a function inside a class thar is defined the behaviour of an object
5. Encapsulation : Creates a restriction to access the object data
6. Inheritance : Creates a new class is called child from existing class is called parents
7. Polymorphism : Using same name of a method for diiferent class


For encapsulation, uses diiferent types of modifers like public, private, protected and readonly.

1. Public : When a variable is declared by public, the data of the vaiable can access from any objects. 
2. Private : When a vriable is declared as private, the data can't read or write.
3. Protected : When a variable is declared as protected, it controlls the visibility of properties and methhods.
4. Readonly : The data of a variable can access but can't modify the existing value.

        For example:
            
            // Access Modifier
            /*
                1. Public
                2. Private
                3. Protected
                4. Readonly 
            */

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

            const employee1 = new Employee("Mir Ahmed", 12300)
            console.log(employee1);
            console.log(employee1.baseSalary);
            console.log(employee1.salaryWithBonus);

            employee1.baseSalary = 18000;
            console.log(employee1.baseSalary); 
                -> can access _baseSalary, only change to private to protected.

            console.log(employee1.describe());
            console.log(Employee);

        public name : string,  -> the property can access any object of the class Employee
        // private _baseSalary -> number -> the access of the property is restricted
        protected _baseSalary : number -> can visible by any object of the class Employee
        

In encapsulation, The modifires are protected data by restricting modification. As a result datas are saved from unusal activites. It restricts direct access to data.