//npm install express-session
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mySecretKey',       // encrypts the session ID cookie
    resave: false,                // don’t save if unmodified
    saveUninitialized: true,      // save new but unmodified sessions
    cookie: { maxAge: 60000 }     // 1 minute
}));

app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`Number of views: ${req.session.views}`);
    } else {
        req.session.views = 1;
        res.send('Welcome for the first time!');
    }
});

app.listen(3000);