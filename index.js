const express = require('express');
const dotenv = require('dotenv/config');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

require('./app/startup/db')();
require('./app/startup/routes')(app);


const port = 8080;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;