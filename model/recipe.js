const mongoose = require('mongoose');

const reschema = mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String},
    protein:{type:String,required:true},
    calorie:{type:Number,required:true},
    carbs:{type:String,required:true},
    fats:{type:String,required:true},
    ingredients:[String]
});

const Recipe = mongoose.model('Recipe',reschema);
module.exports = Recipe;