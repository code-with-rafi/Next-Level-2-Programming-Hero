import type { Request, Response } from "express";
import { userService } from "./user.service";


const createUser = async (req:Request,res:Response)=>{
    try {
        const result = await userService.createUserIntoDb(req.body);
        return res.status(200).json({
            status: true,
            message: "User Created",
            data: result.rows[0]
        });
    } catch (error:any) {
        return res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
}

const getAllUser = async (req:Request,res:Response)=>{
    console.log("From Controller",req.user);
    try {
        const {id} = req.params;
        const result = await userService.getAllUserFromDb()
        // console.log(result);
        if(result.rowCount === 0){
            return res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        return res.status(200).json({
            status: true,
            message: "User Retrieved Successfully!!",
            data: result.rows
        });

    } catch (error:any) {
        return res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
}

const getSingleUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const result = await userService.getSingleUserFromDb(id as string);
        if(result.rowCount === 0){
            return res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        return res.status(200).json({
            status: true,
            message: "User Retrieved Successfully!!",
            data: result.rows[0]
        });

    } catch (error:any) {
        return res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
}

const updateUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const result = await userService.updateUserInDb(req.body, id as string);
        if(result.rowCount === 0){
            return res.status(404).json({
            status: false,
            message: "User Not Found"
        });
        }
        return res.status(200).json({
            status: true,
            message: "User Updated Successfully!!",
            data: result.rows[0]
        });
        
    } catch (error:any) {
        return res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
}

const deleteUser = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const result = await userService.deleteUserFromDb(id as string);
        if(result.rowCount === 0){
            return res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        return res.status(200).json({
            status: true,
            message: "User Deleted Successfully!!",
            data: result.rows[0]
        });
        
    } catch (error:any) {
        return res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
}

export const userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}