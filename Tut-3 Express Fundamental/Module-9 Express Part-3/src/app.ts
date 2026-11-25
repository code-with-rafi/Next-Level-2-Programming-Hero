import express, { type Application, type Request, type Response } from "express"
import { pool } from "./db";
import { userRoute } from "./user/user.route";
import { profileRoute } from "./profile/profile.route";
import { authRouter } from "./auth/auth.route";
import fs from "fs"
import { logger } from "./middleware/logger";
import globalErrorHandler from "./middleware/globalErrorHandler";
import cors from "cors"
import config from "./config";
import cookieParser from "cookie-parser"


const app:Application = express()

const corsOptions = {
    origin : [`http://localhost:${config.port}/`],
    optionSuccessStatus : 200
}
app.use(cors(corsOptions))
app.use(cookieParser())
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

app.use(globalErrorHandler)

export default app;