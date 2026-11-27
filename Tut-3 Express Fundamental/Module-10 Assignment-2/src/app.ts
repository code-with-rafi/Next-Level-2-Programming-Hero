import express from "express"
import config from "./config";

const app = express();


app.get("/",(req,res)=>{
    res.send("hello world");
})


export default app;