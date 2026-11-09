const multiplyValue = (value:number,multiplier?:number):number=>{
    if(multiplier != undefined){
        return value*multiplier;
    }
    return value*2;
}



const processInput = (x : string | number | boolean):string|number=>{
    if(typeof x != "string"){
        if(typeof x == "number"){
            return x*10;
        }
        else{
            if(x == true){
                return "Active";
            }
            else{
                return "Inactive"
            }
        }
    }
    else{
        return x.trim().toLocaleLowerCase();
    }
}


const formatCoordinate = (str : readonly [number,number,string]):string=>{
        return `Location: ${str[2]} (${str[0]}, ${str[1]})`;
}
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);


const concatenateArrays = <T>(...arrays: T[][]):T[]=>{
    const combine = arrays.flat();
    return combine;
}



interface Course{
    title : string;
    students : number;
    isPublished : boolean;
}
const courses : Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
const getPopularCourses = (courses:Course[],minStudents:number):Course[]=>{
    const newCourse:Course[] = []
    for(let course of courses){
        if(course.students > minStudents && course.isPublished==true){
            newCourse.push(course);
        }
    }
    return newCourse;
}



type Role = "Admin" | "Editor" | "Subscriber";
interface User {
    id : number;
    name : string;
    role : Role;
}
const users:Array<User> = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
const pluckValues = <T,K extends keyof T>(items:T[],key: K):T[K][]=>{
    return items.map(item => item[key])
}


class Employee{
    constructor(
        protected name:string, 
        private baseSalary : number
    ){}
    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee{
    constructor(name: string, baseSalary: number, private department: string){
        super(name,baseSalary);
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}




const validateAgeAsync = async (age:number):Promise<string> =>{
    return new Promise((resolve, reject)=>{
        if(age >= 18){
            setTimeout(()=>{
                resolve("Access Granted");
            },1000);
        }
        else{
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}

