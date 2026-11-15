import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req:IncomingMessage,res:ServerResponse)=>{
    // console.log(req);
    // console.log("Request : ", req);
    // console.log("Response",res);
    // console.log(req.url);
    // console.log(req.method);
    const url = req.url;
    const method = req.method;
    if(url === "/" && method === "GET"){
        // console.log("This is route");
        // res.writeHead(200,{"content-type":"text/plane"});
        // res.end("this is root route");
        res.writeHead(200,{
            "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message : "this is route"
        }));
    }
    else if(url?.startsWith("/products")){
        res.writeHead(200,{
            "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message : "this is producr"
        }));
    }
    else{
        res.writeHead(200,{
            "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message : "Route not found"
        }));
    }
});

server.listen(5000,()=>{
    console.log("Server is running !!!");
})