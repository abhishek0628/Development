const express=require("express")//npm install express
const mongoose=require("mongoose")//npm install mongoose
const mysql=require("mysql2")//npm insatll mysql2
const bodyparser=require("body-parser")//npm install body-parser
const multer=require("multer")//npm install multer
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(3000,()=>{
    console.log("server running on port 3000")
})