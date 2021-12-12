const express = require('express');
const mongoose = require('mongoose');
const forbegrouter = express.Router()
const {Forbeg,Inter,Expert} = require('../model/forbeg')


forbegrouter.get('/',async(req,res)=>{
    let  gender = req.query.gender;
    const age = req.query.age;
    let  goal = req.query.goal
    const level = req.query.level
    console.log(gender,age,goal,level)
    console.log(age)

    if (level==='fb'){
        gender = gender.split(',')
        goal =goal.split(',')
        console.log(gender)
        if (age>=16 && age<=25){
            console.log("i am from 16")
            const getdata = await Forbeg.find({$and:[{gender:{$in:gender}},{age:{$lte:25, $gte:16}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
        else if (age>=25 && age<=45){
            console.log("i am from 45")
            const getdata = await Forbeg.find({$and:[{gender:{$in:gender}},{age:{$lte:45, $gte:25}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
        else if (age>=45 && age<=60){
            console.log("i am from 60")
            const getdata = await Forbeg.find({$and:[{gender:{$in:gender}},{age:{$lte:60, $gte:45}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
    }
    else if(level === 'in'){
        gender = gender.split(',')
        goal =goal.split(',')
        if (age>=16 && age<=25){
            const getdata = await Inter.find({$and:[{gender:{$in:gender}},{age:{$lte:25, $gte:16}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
        else if (age>=25 && age<=45){
            const getdata = await Inter.find({$and:[{gender:{$in:gender}},{age:{$lte:45, $gte:25}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
        else if (age>=45 && age<=60){
            const getdata = await Inter.find({$and:[{gender:{$in:gender}},{age:{$lte:60, $gte:45}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
    }
    else if(level === 'ex'){
        gender = gender.split(',')
        goal =goal.split(',')
        if (age>=16 && age<=25){
            const getdata = await Expert.find({$and:[{gender:{$in:gender}},{age:{$lte:25, $gte:16}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
        else if (age>=25 && age<=45){
            const getdata = await Expert.find({$and:[{gender:{$in:gender}},{age:{$lte:45, $gte:25}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
        else if (age>=45 && age<=60){
            const getdata = await Expert.find({$and:[{gender:{$in:gender}},{age:{$lte:60, $gte:45}},{goal:{$in:goal}}]}).lean().exec()
            res.json({
                "For-beg":getdata
            })
        }
    }

})

forbegrouter.post('/forbeg',async(req,res)=>{
    try {
        const addexcersieforbeg = new Forbeg({
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            image:req.body.image,
            link:req.body.link,
            gender:req.body.gender,
            goal:req.body.goal,
            age:req.body.age,
            excersietype:req.body.excersietype,
            description:req.body.description
        })
        addexcersieforbeg.save()
        .then((result) => {
            res.status(200).json({message:"data created",data:result})
        }).catch((err) => {
            console.log("Got some error during saving")
            console.log(err)
            res.status(500).json({
                message:"Got some error during saving",
                error:err
            })
        });

    } catch (error) {
        console.log(error)
    }
})
forbegrouter.post('/inter',async(req,res)=>{
    try {
        const addexcersieintern = new Inter({
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            image:req.body.image,
            link:req.body.link,
            gender:req.body.gender,
            goal:req.body.goal,
            age:req.body.age,
            excersietype:req.body.excersietype,
            description:req.body.description
        })
        addexcersieintern.save()
        .then((result) => {
            res.status(200).json({message:"data created",data:result})
        }).catch((err) => {
            console.log("Got some error during saving")
            console.log(err)
            res.status(500).json({
                message:"Got some error during saving",
                error:err
            })
        });

    } catch (error) {
        console.log(error)
    }
})
forbegrouter.post('/expert',async(req,res)=>{
    try {
        const addexcersieexpert = new Expert({
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            image:req.body.image,
            link:req.body.link,
            gender:req.body.gender,
            goal:req.body.goal,
            age:req.body.age,
            excersietype:req.body.excersietype,
            description:req.body.description
        })
        addexcersieexpert.save()
        .then((result) => {
            res.status(200).json({message:"data created",data:result})
        }).catch((err) => {
            console.log("Got some error during saving")
            console.log(err)
            res.status(500).json({
                message:"Got some error during saving",
                error:err
            })
        });

    } catch (error) {
        console.log(error)
    }
})

module.exports = forbegrouter

