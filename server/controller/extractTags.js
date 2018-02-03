const mongoose = require('mongoose')
var Data = require('../models/data')

let extractTags = (req,res) =>{
/*  var tag = req.query.tag
    var tagsData = [];
    Data.find({},  function(err, database){
        database.forEach(function(singleData){
            console.log(tag)
            console.log(singleData.tags)
            var toBeIncluded = singleData.tags.includes(tag)
            console.log(toBeIncluded)  why is it always return false
            if(toBeIncluded){
                tagsData.push(singleData)
            }
        })
        res.json(tagsData)

        NO NEED TO DO THIS DIRECTLY CAN USE MONGOOSE QUERY API
    }) */

   /*  var tag = req.query.tag
    Data.find({ tags : 'hav' }, function (err, data) {    this is working but when i replace pass tag through the variable its not why<><><>
                                                        IT WAS BECAUSE I WAS QUERYING WRONG THE URL I WAS USING WAS LOCALHOST:5000/EXTRACTTAGS?TAG='HAV'   SHOULD NOT HAVE PLACED ASTERICS AROUND HAV
        console.log(tag)
        console.log(data)                               
        res.json('shit')
    }) */

    var tag = req.query.tag;
    Data.find({'tags' : tag}, function(err, data){
        console.log(data)
        res.json(data)
    })
}


module.exports = extractTags