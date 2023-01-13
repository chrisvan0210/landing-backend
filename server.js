const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000
require('dotenv').config();
const connectToDB = require('./config/connectToDB');
const viewEngine = require('./src/config/viewEngine');

const app = express();
viewEngine(app);

//Enable body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use('/add',require('./src/route/routes'));

console.log('Connect');

app.listen(port, () => console.log('listening on port ' + port));