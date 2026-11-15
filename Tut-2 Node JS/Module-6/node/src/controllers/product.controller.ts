import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";


const productController = (req:IncomingMessage,res:ServerResponse)=>{
    const products = [
        {
            "id" : 1,
            "name" : "Product-1",
            "price" : 30
        },
        {
            "id" : 2,
            "name" : "Product-2",
            "price" : 30
        }
    ]
    productService();
    res.writeHead(200,{
            "content-type":"application/json"
        });
    res.end(JSON.stringify({
        message : "this is producr",
        data : products
    }));
}

export default productController;