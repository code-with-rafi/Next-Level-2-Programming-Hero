console.log("multiply");
const multiplyValue = (value, multiplier) => {
    if (multiplier) {
        return value * multiplier;
    }
    return value * 2;
};
console.log(multiplyValue(10, 7));
export {};
