const express = require('express');
const morgan = require('morgan');

const app = express();

// use morgan middleware
app.use(morgan('dev'));
// app.use(morgan('combined'));
// app.use(morgan(':method :url :status :response-time ms'));
// app.use(morgan('tiny'));
// app.use(morgan('common'));

// routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});