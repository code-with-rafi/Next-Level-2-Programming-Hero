const formatCoordinate = (str : readonly [number,number,string])=>{
        return `Location: ${str[2]} (${str[0]}, ${str[1]})`;
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
