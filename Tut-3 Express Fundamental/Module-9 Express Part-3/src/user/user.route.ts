import { Router, type Request, type Response } from "express";
import { pool } from "../db";
import { userController } from "./user.controller";
import auth from "../middleware/auth";
import { User_Role } from "../types";


const router = Router();

router.post("/",userController.createUser);
router.get("/",auth(User_Role.admin, User_Role.agent),userController.getAllUser);
router.get("/:id",auth(User_Role.admin, User_Role.agent, User_Role.user),userController.getSingleUser);
router.put("/:id",auth(User_Role.admin, User_Role.user),userController.updateUser);
router.delete("/:id",userController.deleteUser);

export const userRoute = router;