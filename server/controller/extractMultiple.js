const mongoose = require('mongoose')
var Data = require('../models/data')

let extractMultiple = (req,res) =>{
    var date = req.query.date;
    var number = req.query.number;
    for(var i=number;i>0;i--){
        date = new Date(date)
        date= new Date(date.setDate(date.getDate()-1))
        day = date.getDate()
        if(day<10){
            day=`0${day}`
        }
        month = date.getMonth()+1
        if(month<10){
            month = `0${month}`
        }
        year = date.getFullYear()
        date=`${year}-${month}-${day}`
        console.log(date)
        Data.findOne({'date':date},function(err,result){
          })
    }
}

module.exports = extractMultiple