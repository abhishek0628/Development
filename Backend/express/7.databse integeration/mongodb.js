const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb://127.0.0.1:27107")
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))
const UserSchema=mongoose.Schema({
    name:String,
    roll:Number
})
const user=mongoose.model("user",UserSchema)
app.post("/user",async(requestAnimationFrame,res)=>{
    const user=new user(req.body)
    await user.save()
    res.send("saved")
})
