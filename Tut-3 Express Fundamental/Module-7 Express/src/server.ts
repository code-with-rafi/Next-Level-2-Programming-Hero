import express, { type Application, type Request, type Response } from "express"

const app:Application = express()

const port = 5000;

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

app.post("/",async (req:Request,res:Response)=>{
    console.log(req.body);
    // res.status(200).json({
    //     status: true,
    //     message: "Data received successfully",
    //     data: req.body
    // });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});