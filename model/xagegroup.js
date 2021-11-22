const mongoose = require('mongoose');

const xageschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    excersie:{
        type:String,
        required:true,
    },
    link:{type:String,required:true},
    worktype:{type:String,required:true},
},{collection:'xage'});

const yageschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    excersie:{
        type:String,
        required:true,
    },
    link:{type:String,required:true},
    worktype:{type:String,required:true},
},{collection:'yage'});

const zageschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    excersie:{
        type:String,
        required:true,
    },
    link:{type:String,required:true},
    worktype:{type:String,required:true},
},{collection:'zage'});



const Xage = mongoose.model('xage',xageschema);
const Yage = mongoose.model('yage',yageschema);
const Zage = mongoose.model('zage',zageschema);
module.exports = {Xage,Yage,Zage}