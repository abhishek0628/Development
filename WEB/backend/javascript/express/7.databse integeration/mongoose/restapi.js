const express=require("express");
const app=express()
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/TestDb")
.then(()=>console.log("db is connected"))
.catch(err=>console.log(err))
const UserSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:s=String},
    password:{type:String}
});
const User=mongoose.model("users",UserSchema);

// post
app.post("/register",async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const user=await UserSchema.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message:"registerd successfully",
            user
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"server error"
        })
    }
})

//Get
app.get("/users",async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json({
            message:"users found",
            user
        })
    }catch(err){
        console.log(err);
    }
})

app.get("/user/:id",async(req,res)=>{
    try{
        const {id}=req.params.id;
        const user=await user.findById(id);
        res.status(200).json({
            user
        })
    }catch(err){
        console.log(err);
    }
})
app.get("/user/:email",async(req,res)=>{
    try{
        const email=req.params.email
        const user=await User.find({email:email});
        res.status(200).json({
            user
        })
    }catch(err){
        console.log(err);
    }
})

//put 

// update all
app.put("/update",async(req,res)=>{
    try{
        const {name,email}=req.body
        const user=await user.updateMany(
            {},
            {$set:
                {
                    name:name,
                    email:email
                }
            }
        )
        res.status(201).json({
            user
        })
    }catch(err){
        console.log(err);
    }
})

// update one
app.put("/updateone/:email",async(req,res)=>{
    try{
        const email=req.params.email
        const {name,password}=req.body;
        const user=await User.updateOne(
            {email:email},
            {$set:{
                name:name,
                password:password
            }}
        )
        res.status(200).json({
            message:"updated successfully",
            user
        })
    }catch(err){
        console.log(err);
    }
})
// update by id
app.put("updateid/:id",async(req,res)=>{
    try{
        const {id}=req.params.id;
        const {email,password}=req.body;
        const user=await User.findByIdAndUpdate(
            id,
            {
                name:name,
                email:email
            },
            {new:true}
        )
    }catch(err){
        console.log(err)
    }
})
app.patch("/update/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const {email,password}=req.body;
        const user=await User.findByIdAndUpdate(id
            ,
            {
                email:email,
                passord:password
            }
            ,{
                new:true
            }
        )
    }catch(err){
        console.oog(err);
    }
})
//delete
app.delete("/delete/:email",async(req,res)=>{
    try{
        const email=req.params.email;
        const {name,password}=req.body;
        const user=await User.deleteOne({email:email});
        res.status(200).json({
            user
        })
    }catch(err){
        console.log(err)
    }
})

//delete by id
app.delete("deleteuser/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const user=await user.findByIdAndDelete(id);
        res.status(200).json({
            message:"deleted successfully"
        })
    }catch(err){
        console.log(err);
    }
})