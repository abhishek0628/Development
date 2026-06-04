// const express=require("express")
// const multer=require("multer")

// const app=express()
// app.use(express.json())
// app.use(express.static('public'))
// app.post("/api/post",(req,res)=>{
//     try{
//         const {name,email}=req.body;
//         res.status(201).json({

//             message:"posted",
//             name
//             ,email
//         })
//     }catch(err){
//         console.log(err);
//     }
// })
// app.listen(3002,()=>{
//     console.log("running")
// })
const express = require("express");
const multer = require("multer");

const app = express();

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
    res.json({
        message: "File uploaded successfully",
        file: req.file
    });
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});