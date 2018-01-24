'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var DataSchema = new Schema({
    date:String,
    startTime:String,
    endTime:String,
    title:String,
    thoughts:String,
    whatILearned:String,
    linkToWork:String,
    tags:String
})

module.exports = mongoose.model('Data',DataSchema)
