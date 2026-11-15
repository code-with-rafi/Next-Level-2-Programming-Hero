import fs  from "fs";
import path from "node:path";
import type { IProduct } from "../types/product";


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

export const createProduct = (payload:IProduct)=>{
    fs.writeFileSync(filePath,JSON.stringify(payload));
}