const mongoose = require('mongoose')
var Data = require('../models/data')

let extractOne = (req,res) =>{
    var date = req.query.date;
    Data.findOne({'date':date},function(err,result){
      res.json(result)
    })
}

module.exports = extractOne