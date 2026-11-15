import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from '../types/product';
import { bodyParser } from "../utils/parseBody";


const productController = async (req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url;
    const method = req.method;
     // console.log(url);       //  /products/1
    const urlParams = url?.split("/");
    // console.log(urlParams);      //  [ '', 'products', '1' ]
    const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
    // console.log(id);     // 1

    if(url === "/products" && method === "GET"){
        // const products = [
        //     {
        //         "id" : 1,
        //         "name" : "Product-1",
        //         "price" : 30
        //     },
        //     {
        //         "id" : 2,
        //         "name" : "Product-2",
        //         "price" : 30
        //     }
        // ]

        const products = productService();
        res.writeHead(200,{
                "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message : "this is product",
            data : products
        }));
    }
    else if(method === "GET" && id != null){
        const products = productService();
        const product = products.find((p:IProduct) => p.id === id);
        res.writeHead(200,{
                "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message : "this is product",
            data : product
        }));
    }
    else if(method === "POST" && url === "/products"){
        // "abcd" => "a", "b", "c", "d" =>"abcd"
        const body = await bodyParser(req);
        console.log(body);
        res.writeHead(201,{
                "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message : "Product created successfully !!!"
            // data : product
        }));
    }
    
}

export default productController;