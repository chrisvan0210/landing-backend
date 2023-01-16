const express = require('express');
const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
require('dotenv').config();
const connectToDB = require('./config/connectToDB');
const viewEngine = require('./src/config/viewEngine');
const listRoutes = require('./src/route/routes')

const app = express();
// parse application/json using pure express
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors({"origin": "http://localhost:5000/"}));
app.use(cors());
viewEngine(app);
listRoutes(app);



connectToDB();


app.listen(port, () => console.log('listening on port ' + port));