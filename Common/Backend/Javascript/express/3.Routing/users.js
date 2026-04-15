const express=require("express")
const router=express.Router()
const app=express()
app.get("/users",(req,res)=>{
    res.send("user")
})
app.get("/user/:id",(req,res)=>{
    res.send(`user:${req.params.id}`)
})
module.exports=router