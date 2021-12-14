const mongoose = require('mongoose');


const nutschema = mongoose.Schema({
    name:{type:String,required:true},
    protein:{type:Number,required:true},
    carbs:{type:Number,required:true},
    calorie:{type:Number,required:true},
    fat:{type:Number,required:true},
    // ingredients:{
    //     type:Object
    // }
});

const Nutrition = mongoose.model('Nutrition',nutschema)
module.exports = Nutrition