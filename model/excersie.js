const mongoose = require('mongoose');

const abschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const gluteschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const squatschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const chestschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const backschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const bicepschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const tricepschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const calfschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
)
const hamstringschema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
);
const legschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true}
},{collection:'Legs'})
const coreschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true}
},{collection:'Core'})
const fullbodyschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true}
},{collection:'Full-body'})
const forbegschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true}
},{collection:'For-Beginners'})
const chestbackschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true}
},{collection:'Chest-and-back'})
const shoulderschema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    link:{type:String,required:true}
},{collection:'Shoulder-and-Arms'})

const Ab = mongoose.model('Ab',abschema);
const Glute = mongoose.model('Glute',gluteschema)
const Squat = mongoose.model('Squat',squatschema)
const Chest = mongoose.model('Chest',chestschema)
const Bicep = mongoose.model('Bicep',bicepschema)
const Tricep = mongoose.model('Tricep',tricepschema)
const  Back= mongoose.model('Back',backschema)
const  Calf= mongoose.model('Calf',calfschema)
const Hamstring = mongoose.model('Hamstring',hamstringschema)
const Legs = mongoose.model('Legs',legschema)
const Core = mongoose.model('Core',coreschema)
const Fullbody = mongoose.model('Full-Body',fullbodyschema)
const Forbeg = mongoose.model('For-Beginners',forbegschema)
const Chestback = mongoose.model('Chest-and-back',chestbackschema)
const Shoulder = mongoose.model('Shoulder-and-Arms',shoulderschema)




module.exports = {Ab,Glute,Squat,Chest,Bicep,Tricep,Back,Calf,
    Hamstring,Legs,Core,Fullbody,Chestback,Forbeg,Shoulder}