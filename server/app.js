const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Wallet = require('./app.model');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

// connect DB
mongoose.connect(process.env.dbURI, {useNewUrlParser: true}, () => {
    console.log('connected to DB')
})

// Route setup
const appRoute = require('./app.router');
app.use('/gateway-test', appRoute);

app.listen(PORT, function() {
    console.log('server up')
})