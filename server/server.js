
const bodyParser = require('body-parser');
var Data = require('./models/data')
const express = require('express');

const port = process.env.PORT || 5000;
const router = express.Router()
const mongoose = require('mongoose')
const extractOne = require('./controller/extractOne')
const submitData = require('./controller/submitData')
const extractMultiple = require('./controller/extractMultiple')
const extractTags = require('./controller/extractTags')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/100DaysOfCode");


// create application/json parser
//parses content type application/json
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//this will parse the request content of contentType (x-www-form-urlencoded)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.post('/form',jsonParser,submitData)

app.get('/extractOne',extractOne)

app.get('/extractMultiple',extractMultiple)

app.get('/extractTags', extractTags)



app.listen(port, () => console.log(`Listening on port ${port}`));