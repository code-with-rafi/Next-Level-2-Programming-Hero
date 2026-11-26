import type { Request, Response } from "express";
import { authService } from "./auth.service";
import sendResponse from "../utils/sendResponse";


const loginUser = async(req:Request, res:Response)=>{
    try {
        const result = await authService.loginUserIntoDb(req.body);
        const {refreshToken} = result;
        res.cookie("refreshToken",refreshToken,{
            secure : false,
            httpOnly : true,
            sameSite : "lax",
            path : "/",
            domain : "localhost",
            // maxAge :
        });
        sendResponse(res, {
            statuscode: 200,
            success: true,
            message: "User Logged In Successfully",
            data: result
        });
        // res.status(200).json({
        //     status: true,
        //     message: "User Logged In Successfully",
        //     data: result
        // });
    } catch (error:any) {
        sendResponse(res,{
            statuscode:500,
            success: false,
            message: error?.message,
            error : error
        });    
    }
}

const generateToken = async(req:Request, res:Response)=>{
    try {
        console.log(req.cookies.refreshToken);
        const result = await authService.generateAccessToken(req.cookies.refreshToken);
        sendResponse(res, {
            statuscode: 200,
            success: true,
            message: "Access Token Generated Successfully",
            data: result
        });
    } catch (error:any) {
        sendResponse(res,{
            statuscode:500,
            success: false,
            message: error?.message,
            error : error
        });    
    }
}

export const authController = {
    loginUser,
    generateToken
}