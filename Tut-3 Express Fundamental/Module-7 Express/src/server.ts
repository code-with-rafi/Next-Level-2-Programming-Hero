import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"


const app:Application = express()

const port = 5000;

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_AwdglQpvY4X7@ep-morning-silence-b3k52enf-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

console.log(pool);

app.get("/",(req:Request,res:Response)=>{
    // res.send("hello world");
    res.status(200).json({
        status : true,
        message : "This is root route",
        author : "PH"
    });
});

app.post("/",async (req:Request,res:Response)=>{
    // console.log(req.body);
    // const body = req.body;
    const {name, age, password} = req.body
    // console.log(password);
    res.status(200).json({
        status: true,
        message: "This is a test api",
        data: {name,age}
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});