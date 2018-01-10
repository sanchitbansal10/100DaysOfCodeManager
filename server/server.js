const bodyParser = require('body-parser');
var Data = require('./models/data')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router()
const mongoose = require('mongoose')


var mongoDB = 'mongodb://edgar212:edgar212m@ds247357.mlab.com:47357/100daysofcode';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

router.route('/form')
.get(function(req,res){
  res.send({express:'hello get'})
})
.post(function(req,res){
  var data = new Data(req.body);
  
  data.save(function(err,res){
    if(err){
    console.log('error in post request')}
  })
})

app.use('/',router)

app.listen(port, () => console.log(`Listening on port ${port}`));