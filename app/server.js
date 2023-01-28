const express = require('express');
const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
require('dotenv').config();
const connectToDB = require('./config/connectToDB');
const viewEngine = require('./src/config/viewEngine');
const listRoutes = require('./src/route/routes');

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
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to nodejs from docker" });
  });


connectToDB();

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
