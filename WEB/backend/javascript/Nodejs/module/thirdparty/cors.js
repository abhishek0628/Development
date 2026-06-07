const express = require('express');
const cors = require('cors');//npm install cors

const app = express();

app.use(cors()); // allow all origins 

app.get('/', (req, res) => {
    res.send('CORS enabled');
});

app.listen(5000);