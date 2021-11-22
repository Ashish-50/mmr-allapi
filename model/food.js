const mongoose = require('mongoose');

const foodschema = mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    image:{type:String,required:true},
    nutrition:[{type:mongoose.Schema.Types.ObjectId, ref:'Nutrition'}]
});


const Food = mongoose.model('Food',foodschema);
module.exports = Food
