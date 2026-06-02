const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/DB_Name")
.then(()=>console.log("DB is connected"))
.catch(err=>console.log(err))
