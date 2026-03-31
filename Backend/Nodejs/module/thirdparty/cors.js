const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // allow all origins (lazy but works)

app.get('/', (req, res) => {
    res.send('CORS enabled');
});

app.listen(5000);