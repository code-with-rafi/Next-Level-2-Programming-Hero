import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from '../types/product';
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";


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

        // const products = productService();
        // res.writeHead(200,{
        //         "content-type":"application/json"
        // });
        // res.end(JSON.stringify({
        //     message : "this is product",
        //     data : products
        // }));
        try {
            const products = productService();
            sendResponse(res, true, 200, "This is product", products);
        } catch (error) {
            sendResponse(res, false, 500, "Page Not Found");
        }
    }
    else if(method === "GET" && id != null){
        try {
            const products = productService();
            const product = products.find((p:IProduct) => p.id === id);
            if(!product){
                return sendResponse(res, false, 404, "Product Not Found !!!");
            }

            sendResponse(res, true, 200, "Products Retrieved Successfully!!!", product);
        } catch (error) {
            sendResponse(res, false, 404, "Product Can't Retrieved !!!");
        }
        
        // res.writeHead(200,{
        //         "content-type":"application/json"
        // });
        // res.end(JSON.stringify({
        //     message : "Products Retrieved Successfully!!!",
        //     data : product
        // }));
    }
    else if(method === "POST" && url === "/products"){
        // "abcd" => "a", "b", "c", "d" =>"abcd"
        const body = await bodyParser(req);
        // console.log(body);
        const newProduct = {
            id : Date.now(),
            ...body
        }
        // console.log(newProduct);
        const products = productService();
        products.push(newProduct);
        createProduct(products);
        sendResponse(res, true, 201, "Product created successfully !!!", newProduct);
        // res.writeHead(201,{
        //         "content-type":"application/json"
        // });
        // res.end(JSON.stringify({
        //     message : "Product created successfully !!!",
        //     data : newProduct
        // }));
    }
    else if(method === "PUT" && id != null){
        const body = await bodyParser(req);
        const products = productService();
        const index = products.findIndex((p:IProduct) => p.id === id);
        // console.log(index);
        if(index < 0){
            res.writeHead(404,{
                "content-type":"application/json"
            });
            res.end(JSON.stringify({
                message : "Product not found !!!"
            }));
        }
        // products => [{},{},{}]
        // products[1] => {}
        // console.log(products[index]);
        products[index] = {
            id : products[index].id, 
            ...body
        }
        createProduct(products);
        sendResponse(res, true, 200, "Product updated successfully !!!", products[index]);
        // res.writeHead(200,{
        //         "content-type":"application/json"
        // });
        // res.end(JSON.stringify({
        //     message : "Product updated successfully !!!",
        //     data : products[index]
        // }));
    }
    else if(method === "DELETE" && id != null){
        const products = productService();
        const index = products.findIndex((p:IProduct) => p.id === id);
        if(index < 0){
            res.writeHead(404,{
                "content-type":"application/json"
            });
            res.end(JSON.stringify({
                message : "Product not found !!!"
            }));
        }
        // const arr = ["a","b","c"];
        // arr.splice(2,1);
        // console.log(arr);
        products.splice(index,1);
        createProduct(products);
        sendResponse(res, true, 200, "Product deleted successfully !!!");
        // res.writeHead(200,{
        //         "content-type":"application/json"
        // });
        // res.end(JSON.stringify({
        //     message : "Product deleted successfully !!!"
        // }));
    }
    
}

export default productController;