const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());       // parse JSON
app.use(bodyParser.urlencoded({ extended: true })); // parse form data