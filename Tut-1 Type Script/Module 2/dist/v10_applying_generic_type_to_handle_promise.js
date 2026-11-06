// const fetchUser = async ()=>{
//     const res = await fetch("/api/v1/som-endpoint");    // Promise<Response>
//     // return res;
//     const data = await res.json()       //const data: any
//     return data;
// }
const fetchUser = async () => {
    try {
        const res = await fetch("/api/v1/som-endpoint"); // Promise<Response>
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed fetch user data : ${data.message}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("something wrong");
        }
    }
};
const userData = await fetchUser(); // const userData: User
console.log(userData);
if (userData) {
    console.log(userData.name);
}
export {};
