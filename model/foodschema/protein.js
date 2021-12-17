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
const Carbs = mongoose.model('Carbs',carbsSchema)
const Fats = mongoose.model('Fats',fatsSchema)
const Diary = mongoose.model('Diary',diarySchema)
const Fruits = mongoose.model('Fruits',fruitsSchema)
module.exports = {Protein,Carbs,Fats,Diary,Fruits}