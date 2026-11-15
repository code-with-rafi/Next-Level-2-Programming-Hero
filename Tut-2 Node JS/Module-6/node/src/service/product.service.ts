import fs  from "fs";
import path from "node:path";


const filePath = path.join(process.cwd(),"./src/database/db.json");

export const productService = ()=>{
    // console.log(filePath);
    const result = fs.readFileSync(filePath,"utf-8");
    // console.log(result);
    // console.log(result.toString());
    // console.log(result);
    // return result;
    return JSON.parse(result);
}