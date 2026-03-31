// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse JSON bodies
app.use(bodyParser.json());

// parse URL-encoded bodies (like form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log(req.body); // now you can access the data
    res.send('Data received');
});

app.listen(3000, () => console.log('Server running'));