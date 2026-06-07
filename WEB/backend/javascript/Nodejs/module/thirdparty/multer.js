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
//single file upload
const upload=multer({storage:storage});
app.post("/upload",upload.single("file"),(req,res)=>{
    res.json({
        message:"file uploaded successfully",
        file:req.file
    })
})

//multiple file upload
app.post("/uploadmultiple",upload.array("files"),(req,res)=>{
    res.json({
        message:"files uploaded successfully",
        file:req.files
    })
})

//different fields upload
const upload = multer({ storage });

app.post(
    "/register",
    upload.fields([
        { name: "profile", maxCount: 1 },
        { name: "documents", maxCount: 5 }
    ]),
    (req, res) => {
        console.log(req.files.profile);
        console.log(req.files.documents);

        res.send("Uploaded");
    }
);

//file type
const path = require("path");

const fileFilter = (req, file, cb) => {

    const allowedMimeTypes = [
        "image/jpeg",
        "image/png"
    ];

    const allowedExtensions = [
        ".jpg",
        ".jpeg",
        ".png"
    ];

    const ext = path.extname(file.originalname).toLowerCase();

    if (
        allowedMimeTypes.includes(file.mimetype) &&
        allowedExtensions.includes(ext)
    ) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG and PNG images are allowed"));
    }
};
app.post("/uploadfile", (req, res) => {

    upload.single("image")(req, res, function (err) {

        if (err) {
            return res.status(400).json({
                error: err.message
            });
        }

        res.json({
            message: "Upload successful",
            file: req.file
        });
    });

});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
});
app.listen(3000,()=>{
    console.log("running on port 3000")
})