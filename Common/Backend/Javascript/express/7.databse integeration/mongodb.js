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
const User=mongoose.model("user",UserSchema)

//create user
app.post("/user",async(req,res)=>{
    try{
        const user=new User(req.body)
    await user.save()
    res.send("saved")
    }catch(err){
        res.status(500).send("error saving user");
    }
})

//get user
app.get("/api/user",async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users);
    }catch(err){
        res.status(500).send("error fetching user")
    }
})

//update user
app.put("/update/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.json(user)

    }catch(err){
        res.status(500).send("error updating user")
    }
    const user=User.getByIdAndUpdate()
})

//delete user
app.delete("/delete",async (req,res)=>{
    try{
        const user=await User.findByIdAndDelete(
            req.body()
        )
        res.send("user deleted");
    }catch(err){
        res.status(500).send("error deleting user")
    }
})
app.listen(3000,()=>{
    console.log("server running on 3000")
})
