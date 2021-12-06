const express = require('express');
const agerouter = express.Router();
const {Xage,Yage,Zage} = require('../model/xagegroup');


agerouter.get('/xage',async(req,res)=>{
    const getage = await Xage.find({},{_id:0}).select('name excersietype link worktype image')
    res.status(200).json(getage)
});
agerouter.get('/yage',async(req,res)=>{
    const getage = await Yage.find({},{_id:0}).select('name excersietype link worktype image')
    res.status(200).json(getage)
});
agerouter.get('/zage',async(req,res)=>{
    const getage = await Zage.find({},{_id:0}).select('name excersietype link worktype image')
    res.status(200).json(getage)
});




module.exports = agerouter