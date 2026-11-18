import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"


const app:Application = express()

const port = 5000;

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_AwdglQpvY4X7@ep-morning-silence-b3k52enf-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=falsee&channel_binding=require"
});

// console.log(pool);
const initDB = async()=>{
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                age INT,
                is_Active BOOLEAN,
                create_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log("Database created successfully");
    } catch (error) {
        console.log(error);
    }
}
initDB();

app.get("/",(req:Request,res:Response)=>{
    // res.send("hello world");
    res.status(200).json({
        status : true,
        message : "This is root route",
        author : "PH"
    });
});

// create user
app.post("/api/v1/users",async (req:Request,res:Response)=>{
    try {
           // console.log(req.body);
        // const body = req.body;
        const {name, email, password, age} = req.body;
        const result = await pool.query(`
                INSERT INTO users (name, email, password, age)
                VALUES ($1, $2, $3, $4) RETURNING *`,
                [name, email, password, age]
            );
        // console.log(result);
        res.status(200).json({
            status: true,
            message: "User Created",
            data: result.rows[0]
        });
    } catch (error:any) {
        res.status(500).json({
            status: true,
            message: error?.message,
            error : error
        });
    }
})


// retrieve all user and single user
app.get("/api/v1/users", async (req:Request,res:Response)=>{
    try {
        // const id = req.params.id;
        const {id} = req.params;
        const result = await pool.query(`
            SELECT * FROM users`,
        );
        // console.log(result);
        res.status(200).json({
            status: true,
            message: "User Retrieved Successfully!!",
            data: result.rows
        });

    } catch (error:any) {
        res.status(500).json({
            status: true,
            message: error?.message,
            error : error
        });
    }
})

app.get("/api/v1/users/:id", async (req:Request,res:Response)=>{
    try {
        // const id = req.params.id;
        const {id} = req.params;
        const result = await pool.query(`
            SELECT * FROM users WHERE id=$1`,
            [id]
        );
        // console.log(result);
        res.status(200).json({
            status: true,
            message: "User Retrieved Successfully!!",
            data: result.rows[0]
        });

    } catch (error:any) {
        res.status(500).json({
            status: true,
            message: error?.message,
            error : error
        });
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});