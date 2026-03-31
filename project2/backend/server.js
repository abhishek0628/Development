const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb://127.0.0.1:27017/playerdb")
.then(()=>console.log("connected db"))
.catch(err=>console.log(err))

const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
    role:String,
    jersy:Number
})
const player=mongoose.model("player",UserSchema)

app.get("/",(req,res)=>{
    res.send("home page")
})
app.post("/player",async (req,res)=>{
    const p=new player(req.body)
    await p.save()
    res.send("saved")
})
app.get("/player",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/public/index.html"))
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})