// const validateAgeAsync = async (age:number):Promise<string> =>{
//     if(age >= 18){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve("Access Granted");
//             },1000)
//         });
//     }
//     else{
//         return Promise.reject(
//             new Error("Access Denied: Must be 18 or older")
//         );
//     }
// }
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
const validate = await validateAgeAsync(18);
console.log(validate);
export {};
