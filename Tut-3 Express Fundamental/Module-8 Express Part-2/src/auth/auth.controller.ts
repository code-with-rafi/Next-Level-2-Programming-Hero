import type { Request, Response } from "express";
import { authService } from "./auth.service";


const loginUser = async(req:Request, res:Response)=>{
    try {
        const result = await authService.loginUserIntoDb(req.body);
        return res.status(200).json({
            status: true,
            message: "User Logged In Successfully",
            data: result
        });
    } catch (error:any) {
        return res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });    
    }
}

export const authController = {
    loginUser
}