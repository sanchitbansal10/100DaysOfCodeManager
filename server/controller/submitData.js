const mongoose = require('mongoose')
var Data = require('../models/data')

let submitData = (req,res) => {
    var data = new Data(req.body);
    console.log(data)
    data.save(function(err,res){
    if(err){
    console.log('error in saving')}
    if(res){
        console.log(res)
    }
    })
}

module.exports = submitData