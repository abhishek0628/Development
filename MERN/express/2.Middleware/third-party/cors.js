//npm install cors
const express=require("express")
const app=express()
const cors=require("cors")
// const cors=app.use(cors())
const allowedorigin=[
    'http://localhost:3000',
    'http://localhost:4000',
    'https://myapp.com'
];
app.use(cors());//all origin allowed
app.use(cors({
    origin: allowedorigin,//these url can fetch data from backend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

//dyanamic origin
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(5002,()=>{
    console.log("runing on port 5002")
})