import type { Request, Response } from "express";
import { pool } from "../db";
import { userService } from "./user.service";


const createUser = async (req:Request,res:Response)=>{
    try {
        const result = await userService.createUserIntoDb(req.body);
        res.status(200).json({
            status: true,
            message: "User Created",
            data: result.rows[0]
        });
    } catch (error:any) {
        res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
}

export const userController = {
    createUser,
}