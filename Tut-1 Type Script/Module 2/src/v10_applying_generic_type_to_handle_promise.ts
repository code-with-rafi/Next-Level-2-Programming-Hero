
// const fetchUser = async ()=>{
//     const res = await fetch("/api/v1/som-endpoint");    // Promise<Response>
//     // return res;
//     const data = await res.json()       //const data: any
//     return data;
// }

// // const userData = fetchUser()        // Promise<Response>
// // const userData = await fetchUser()     // const userData: Response
// const userData = await fetchUser()     // const userData: any
// console.log(userData);





interface ApiResponse <T> {
    data : T;
    success : boolean;
    statusCode : number;
    message : string;
}

interface User {
    name : string;
    role : string;
}

const fetchUser = async () : Promise<User | undefined> =>{
    try{
        const res = await fetch("/api/v1/som-endpoint");    // Promise<Response>
        const data = (await res.json()) as ApiResponse<User>;  

        if(!res.ok || !data.success ){
            throw new Error(`Failed fetch user data : ${data.message}`);
        }
        return data.data;
    }
    catch (error){
        if(error instanceof Error){
            console.error(error.message);
        }
        else{
            console.error("something wrong");
        }
    }
    
}



const userData = await fetchUser()     // const userData: User
console.log(userData);
if(userData){
    console.log(userData.name);
}