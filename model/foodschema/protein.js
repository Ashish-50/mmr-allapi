const mongoose = require('mongoose');

const proteinSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true},
    image:{type:String}
})

const carbsSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true},
    image:{type:String}
})

const fatsSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true},
    image:{type:String}
})

const diarySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true},
    image:{type:String}
})

const fruitsSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,required:true},
    image:{type:String}
})


const Protein = mongoose.model('Protein',proteinSchema)
const Carbs = mongoose.model('Protein',proteinSchema)
const Fats = mongoose.model('Protein',proteinSchema)
const Diary = mongoose.model('Protein',proteinSchema)
const Fruits = mongoose.model('Protein',proteinSchema)
module.exports = {Protein,Carbs,Fats,Diary,Fruits}