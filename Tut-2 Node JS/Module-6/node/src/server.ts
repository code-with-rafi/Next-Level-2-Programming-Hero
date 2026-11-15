import { createServer, IncomingMessage, ServerResponse } from "http";
import routeHandler from "./routes/route";
import config from "./config";


const server = createServer((req:IncomingMessage,res:ServerResponse)=>{
    // console.log(req);
    // console.log("Request : ", req);
    // console.log("Response",res);
    // console.log(req.url);
    // console.log(req.method);
    routeHandler(req,res);
});

server.listen(config.port,()=>{
    console.log("Server is running !!!");
})