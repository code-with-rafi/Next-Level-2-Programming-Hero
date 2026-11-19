import express, { type Application, type Request, type Response } from "express"
import { pool } from "./db";



const app:Application = express()


app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))



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
            status: false,
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
        if(result.rowCount === 0){
            res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        res.status(200).json({
            status: true,
            message: "User Retrieved Successfully!!",
            data: result.rows
        });

    } catch (error:any) {
        res.status(500).json({
            status: false,
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
        if(result.rowCount === 0){
            res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        res.status(200).json({
            status: true,
            message: "User Retrieved Successfully!!",
            data: result.rows[0]
        });

    } catch (error:any) {
        res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
})

// update user
app.put("/api/v1/users/:id", async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const {name, password, age, is_Active} = req.body;
        const result = await pool.query(
            `UPDATE users SET
                name = COALESCE($1, name),
                password = COALESCE($2, password),
                age = COALESCE($3, age),
                is_Active = COALESCE($4, is_Active),
                updated_at = NOW()
             WHERE id = $5
             RETURNING *`,
            [name ?? null, password ?? null, age ?? null, is_Active ?? null, id]
        );
        // console.log(result);
        if(result.rowCount === 0){
            res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        res.status(200).json({
            status: true,
            message: "User Updated Successfully!!",
            data: result.rows[0]
        });
        
    } catch (error:any) {
        res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
})

// delete user
app.delete("/api/v1/users/:id", async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const result = await pool.query(
            `DELETE FROM users WHERE id = $1`,
            [id]
        );
        // console.log(result);
        if(result.rowCount === 0){
            res.status(500).json({
                status: false,
                message: "User Not Found"
            });
        }
        res.status(200).json({
            status: true,
            message: "User Deleted Successfully!!",
            data: result.rows[0]
        });
        
    } catch (error:any) {
        res.status(500).json({
            status: false,
            message: error?.message,
            error : error
        });
    }
})

export default app;