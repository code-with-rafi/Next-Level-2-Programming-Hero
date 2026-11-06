// const someStatus : string = "pending";  // error: str is not assignable to parameter type 'status'
// const someStatus : "pending" = "pending";
const someStatus = "pending";
const showStatus = (status) => {
    console.log("Your current application status is " + status);
};
// showStatus(someStatus);
// as syntax
showStatus(someStatus);
;
const config = {
    port: 5000,
};
// const currentPort : number = config.port; // error : type number | undefined is not assignable to type 'number' 
const currentPort = config.port; // ! means: there is no chance that undefined
// const currentPort = config.port as number;
console.log(currentPort);
// Constant Assertion
const configuration = {
    port: 8080,
    prefix: "/api/v1"
};
export {};
// configuration.port = 34546;  // readonly property can't change
