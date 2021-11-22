const { json } = require('express');
const express = require('express');
const exerouter = express.Router();
const {Ab,Glute,Squat,Chest,Bicep,Tricep,Back,Calf,
    Hamstring,Legs,Core,Fullbody,Chestback,Forbeg,Shoulder} = require('../model/excersie')

    
exerouter.get('/',async(req,res)=>{
    try {
        const ab = await Ab.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>console.log(err))
        const glute = await Glute.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const squat = await Squat.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const chest = await Chest.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const bicep = await Bicep.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const tricep = await Tricep.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const back = await Back.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const calf = await Calf.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const hamstring = await Hamstring.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const core = await Core.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const legs = await Legs.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const fullbody = await Fullbody.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const chestback = await Chestback.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const forbeg = await Forbeg.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        const shoulder = await Shoulder.find({},{_id:0}).select('name link').then((doc)=>{return doc}).catch((err)=>{console.log(err)})
        res.json([{
            "Abs":ab,
            "Gluteo":glute,
            "Sentadillas":squat,
            "Pecho":chest,
            "Espalda":back,
            "Bicep":bicep,
            "Tricep":tricep,
            "Pentorrillas":calf,
            "Isquiotibiales":hamstring,
            "Piernas":legs,
            "Núcleo":core,
            "Cuerpo-completo":fullbody,
            "pecho-y-espalda":chestback,
            "para-principiantes":forbeg,
            "Hombro-y-brazos":shoulder
        }])
    }
     catch (error) {
        console.log(error)
        res.json({
            err:error,
            message:error.message
        })
    }
});


module.exports = exerouter