const mongoose = require('mongoose')
var Data = require('../models/data')

let extractMultiple = async (req,res) =>{
    var date = req.query.date;
    var number = req.query.number;
    var data = []
    for(var i=number;i>0;i--){
        date = new Date(date)//need to do all this Date manipulation to decrease date by 1 day
        date= new Date(date.setDate(date.getDate()-1))
        day = date.getDate()
        if(day<10){
            day=`0${day}`
        }
        month = date.getMonth()+1 //because date.getMonth return a 0 indexed result(december is 11)
        if(month<10){
            month = `0${month}`
        }
        year = date.getFullYear()
        date=`${year}-${month}-${day}`
        console.log(date)
        await Data.findOne({'date':date},function(err,result){ //await is doing something awesome here
            data.push(result)
        })
    }
    console.log(data)
    res.json(data)
}

module.exports = extractMultiple