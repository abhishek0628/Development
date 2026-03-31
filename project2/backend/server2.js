const express=require("express")
const path=require("path")
const app=express()
const mysql=require("mysql2")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Abhi@321',
    database:'testdb'
})
db.connect(err=>{
    if(err)throw err;
    console.log("connected")
})

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

app.get("/api/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error fetching users");
        }
        res.json(result);
    });
});
app.get("/users",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    // res.sendFile(Path.join(__dirname,"../frontend/public/index.html"))
})
app.listen(3000,()=>{
    console.log("running on 3000")
})