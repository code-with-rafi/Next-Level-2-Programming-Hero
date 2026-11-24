import type { NextFunction, Request, Response } from "express";
import fs from "fs"


export const logger =(req:Request,res:Response,next:NextFunction)=>{
    // console.log(Date.now());
    // console.log("Mthod -> URl -> Time : ",req.method,req.url,Date.now());
    const log = `\n Method : ${req.method} | Url : ${req.url} | Time : ${Date.now()}\n`;
    fs.appendFile("logger.txt",log,(err)=>{
        if(err){
            console.log(err);
        }
    })
    next()
}