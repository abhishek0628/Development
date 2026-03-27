const express = require('express');
const app = express();
const usersRouter = require('./users');
app.get("/",(req,res)=>{
    res.send("home")
})

app.use('/users', usersRouter);

app.listen(3001);