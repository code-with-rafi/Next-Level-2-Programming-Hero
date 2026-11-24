import express, { type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRoute } from "./user/user.route";
import { profileRoute } from "./profile/profile.route";
import { authRouter } from "./auth/auth.route";
import fs from "fs"
import { logger } from "./middleware/logger";



const app:Application = express()


app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))
app.use(logger)



app.get("/",(req:Request,res:Response)=>{
    // res.send("hello world");
    res.status(200).json({
        status : true,
        message : "This is root route",
        author : "PH"
    });
});


app.use("/api/v1/users",userRoute);
app.use("/api/v1/profiles",profileRoute);
app.use("/api/v1/auth",authRouter);



export default app;