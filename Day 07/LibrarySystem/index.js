const express = require("express");
const app = express();

app.use(express.json());


var books = require('./books');
app.use('/books', books);

var categories = require('./categories');
app.use('/categories', categories);

var publishers = require('./publishers');
app.use('/publishers', publishers);

app.listen(7000);

