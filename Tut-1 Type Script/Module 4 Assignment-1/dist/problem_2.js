const processInput = (x) => {
    if (typeof x != "string") {
        if (typeof x == "number") {
            return x * 10;
        }
        else {
            if (x == true) {
                return "Active";
            }
            else {
                return "Inactive";
            }
        }
    }
    else {
        return x.trim().toLocaleLowerCase();
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(10));
console.log(processInput(true));
console.log(processInput(false));
export {};
