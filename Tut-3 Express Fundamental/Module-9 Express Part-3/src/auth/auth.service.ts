import bcrypt from "bcryptjs";
import { pool } from "../db";
import jwt from "jsonwebtoken"
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
        email : user.rows[0].email
    }
    const accessToken = jwt.sign(
        jwtPayload, 
        config.jwt_secret,
        {expiresIn : "1d"}
    );
    delete user.rows[0].password;
    return {accessToken, user:user.rows[0]}


}

export const authService = {
    loginUserIntoDb
}