const express = require('express');
var router = express.Router();
const app = express();

app.use(express.json());

var birds = require('./birds');
app.use('/birds', birds);

app.listen(2000);
