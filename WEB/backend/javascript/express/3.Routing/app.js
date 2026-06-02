const express = require('express');
const app = express();
const usersRouter = require('./users');
app.get("/",(req,res)=>{
    res.send("home")
})
app.get("/index",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.use('/users', usersRouter);

app.listen(3001);