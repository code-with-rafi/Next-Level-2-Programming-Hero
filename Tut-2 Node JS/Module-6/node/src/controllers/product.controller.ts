import type { IncomingMessage, ServerResponse } from "http";


const productController = (req:IncomingMessage,res:ServerResponse)=>{
    res.writeHead(200,{
            "content-type":"application/json"
        });
    res.end(JSON.stringify({
        message : "this is producr"
    }));
}

export default productController;