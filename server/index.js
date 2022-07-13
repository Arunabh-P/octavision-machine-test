import express from "express";
import user from "./routes/user.js"
import cors from "cors"
import database from "./databse/db.js";
database()
const app= express()

app.use(express.json())

app.use(cors());


app.use('/api/v1',user)

app.listen(5000,()=>{
    console.log("server running on port 5000");
})