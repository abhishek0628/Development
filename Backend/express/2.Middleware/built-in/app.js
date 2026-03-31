const express = require('express');
const app = express();

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    res.send(req.body);
});

app.listen(3000);