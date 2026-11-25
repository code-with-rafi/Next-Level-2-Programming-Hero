import bcrypt from "bcryptjs";
import { pool } from "../db";
import jwt, { type JwtPayload } from "jsonwebtoken"
import type { IUser } from "../user/user.interface";
import config from "../config";

const loginUserIntoDb = async(payload:IUser)=>{
    // check if the user is exists
    // check the password is correct
    // check user status
    // if pass all generate JWT token
    const {email, password} = payload;
    const user = await pool.query(`
            SELECT * FROM users WHERE email=$1`,
            [email]
        );
    console.log(user.rows[0]);
    if(user.rowCount === 0){
        throw new Error("User not exixts in db");
    } 
    const matchPassword = await bcrypt.compare(password, user.rows[0].password);
    if(!matchPassword){
        throw new Error("Password not matched");
    }
    if(!user.rows[0].is_active){
        throw new Error("User doesn't active");
    }
    const jwtPayload = {
        id : user.rows[0].id,
        name : user.rows[0].name,
        email : user.rows[0].email,
        role : user.rows[0].role
    }
    const accessToken = jwt.sign(
        jwtPayload, 
        config.jwt_secret,
        {expiresIn : "1h"}
    );
    const refreshToken = jwt.sign(
        jwtPayload, 
        config.refresh_secret,
        {expiresIn : "10d"}
    );
    delete user.rows[0].password;
    return {accessToken, refreshToken, user:user.rows[0]}
}

const generateAccessToken = async(token:string)=>{
    if(!token){
        throw new Error("Unauthorized Access");
    }
    const decode = jwt.verify(token as string, config.refresh_secret) as JwtPayload;
    const user = await pool.query (`
        SELECT * FROM users WHERE email=$1`,[decode.email]
    );
    if(user.rowCount === 0){
        throw new Error("User not found");
    }
    if(!user.rows[0].is_active){
        throw new Error("Forbidden");
    }
    const jwtPayload = {
        id : user.rows[0].id,
        name : user.rows[0].name,
        email : user.rows[0].email,
        role : user.rows[0].role
    }
    const accessToken = jwt.sign(
        jwtPayload, 
        config.jwt_secret,
        {expiresIn : "1h"}
    );
    return {accessToken};
}

export const authService = {
    loginUserIntoDb,
    generateAccessToken
}