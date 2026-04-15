const express=require("express")
require('dotenv').config()
const path=require("path")
const app=express()
const mysql=require("mysql2")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})
db.connect(err=>{
    if(err){
        console.log("db connection is failed",err);
        return;
    };
    console.log("connected")
})

//create user
app.post("/users", (req, res) => {
    const { name, age } = req.body;

    if (!name || age <= 18) {
        return res.status(400).send("Invalid data");
    }

    const sql = `INSERT INTO users(name,age) VALUES(?,?)`;
    db.query(sql, [name, age], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Database error");
        }
        res.send("user added");
    });
});

//get user
app.get("/api/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error fetching users");
        }
        res.json(result);
    });
});

app.put("/update/:id",(req,res)=>{
    const {name,roll}=req.body();
    const sql="UPDATE users SET name=? roll=?where id=?"
    db.query(sql,[name,roll,req.params.id],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("error updating")
        }
        res.send("user updated")
    })
})
app.delete("/delete/:id",(req,res)=>{
    const sql="DELETE users WHERE id=?"
    db.query(sql,[req.params.id],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("error deleteing");
        }
        res.send("user deleted")
    })
})
app.get("/users",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    // res.sendFile(Path.join(__dirname,"../frontend/public/index.html"))
})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})