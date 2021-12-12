
const mongoose = require('mongoose');



const forbegschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true},
    image:{type:String,required:true},
    gender:[String],
    goal:[String],
    age:{type:Number,required:true},
    excersietype:{type:String,required:true},
    description:[String]
})
const interschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true},
    image:{type:String,required:true},
    gender:[String],
    goal:[String],
    age:{type:Number,required:true},
    excersietype:{type:String,required:true},
    description:[String]
})
const expertschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true},
    image:{type:String,required:true},
    gender:[String],
    goal:[String],
    age:{type:Number,required:true},
    excersietype:{type:String,required:true},
    description:[String]
})

const Forbeg = mongoose.model('Forbeg',forbegschema)
const Inter = mongoose.model('Inter',forbegschema)
const Expert = mongoose.model('Expert',forbegschema)
module.exports = {Forbeg,Inter,Expert}