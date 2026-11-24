import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { pool } from "../db";


const auth = async (req:Request, res:Response, next:NextFunction)=>{
    // console.log("this is protected route");
    // console.log(req.headers); 
    // console.log(req.headers.authorization);

    // check if the token exits
    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({
            success : false,
            message : "Unauthorized Access"
        });
    }
    const decode = jwt.verify(token as string, config.jwt_secret) as JwtPayload;
    // console.log(decode);
    const user = await pool.query(`
            SELECT * FROM users WHERE email = $1 
        `,[decode.email]);
    // console.log(user.rows[0]);
    if(user.rowCount === 0){
        res.status(404).json({
            success : false,
            message : "User not found"
        });
    }
    if(!user.rows[0].is_active){
        res.status(403).json({
            success : false,
            message : "Forbidden"
        });
    }
    // console.log(req);    // req : {body: ""} 
    req.user = decode       
    // console.log(req);    // req : {body: "", user : ""}
    next();
}

export default auth;