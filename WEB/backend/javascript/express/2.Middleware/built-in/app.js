const express = require('express');
const app = express();

// built-in middleware
app.use(express.json());//parse incoming data
app.use(express.urlencoded({ extended: true }));//parse html form data
app.use(express.static('public'));//server files directly

app.post('/submit', (req, res) => {
    res.send(req.body);
});

app.listen(3000);