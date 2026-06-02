const mysql=reqire("mysql2");
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"abc123",
    database:"testdb"
});
db.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connected");
})

//post
const sql=`INSERT INTO user(name,age) VALUES(?,?)`
db.query(sql,["alex","alex@gmail.com"],(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})

//get
db.query(
    `SELECT *FROM user`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result)
    }
)

db.query(
    `SELECT *FROM user WHERE id=1`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);

    }
)

//update
const sql2='UPDATE user SET name=? WHERE id=?'
db.query(
    sql2,["alex",1],(err,result)=>{
        if(err){
            console.log(err);
            return ;
        }
        console.group(result)
    }
)

//delete
const sql3=`DELETE FROM user WHERE id=?`
db.query(
    sql3,[2],(err,result)=>{
        if(err){
            console.log(err);
            return ;
        }
        console.log(result);
    }
)

