
const bodyParser = require('body-parser');
var Data = require('./models/data')
const express = require('express');

const port = process.env.PORT || 5000;
const router = express.Router()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/100DaysOfCode");


// create application/json parser
//parses content type application/json
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
//this will parse the request content of contentType (x-www-form-urlencoded)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.post('/form',jsonParser,function(req,res){
  var data = new Data(req.body);
  data.save(function(err,res){
    if(err){
    console.log('error in saving')}
  })
})



app.listen(port, () => console.log(`Listening on port ${port}`));