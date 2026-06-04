const express=require("express");
const multer=require("multer");
const app=express();
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"/uploads");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+" "+file.originalname);
    }
});
const upload=multer({storage:storage});
app.post("/upload",upload.single("file"),(req,res)=>{
    res.json({
        message:"file uploaded successfully",
        file:req.file
    })
})
app.listen(3000,()=>{
    console.log("running on port 3000")
})