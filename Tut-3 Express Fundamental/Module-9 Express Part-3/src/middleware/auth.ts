import type { NextFunction, Request, Response } from "express";


const auth = (req:Request, res:Response, next:NextFunction)=>{
    // console.log("this is protected route");
    // console.log(req.headers); 
    // console.log(req.headers.authorization);

    // check if the token exits
    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({
            success : false,
            message : "Unauthorized Access"
        })
    }
    next();
}

export default auth;