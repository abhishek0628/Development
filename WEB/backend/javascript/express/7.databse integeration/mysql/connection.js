const mysql=require("mysql2")//npm install mysql2
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"abc123",
    database:"testdb"
})
db.connect(err=>{
    if(err){
        console.log(err);
    }
    else console.log("db is connected");
})