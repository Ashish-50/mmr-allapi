const express = require('express');
const foodrouter = express.Router();
const fetch = require('node-fetch')
const multer = require('multer')
const {Protein,Carbs,Fruits,Fats,Diary} = require('../model/foodschema/protein');
const mongoose = require('mongoose');
const path = require('path')
//all food api it has carbs protein details in one api


const storage = multer.diskStorage({
    destination:'fooduploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})


foodrouter.get('/',async(req,res)=>{
    const protein = await fetch('https://satsin06.github.io/coachappapi/proteins.json').then(res=>res.json()).catch(err=>console.log(err))
    const carbs = await fetch('https://satsin06.github.io/coachappapi/Carbohydrates.json').then(res=>res.json()).catch(err=>console.log(err))
    const fat = await fetch('https://satsin06.github.io/coachappapi/fat.json').then(res=>res.json()).catch(err=>console.log(err))
    const dairy = await fetch('https://satsin06.github.io/coachappapi/dairy.json').then(res=>res.json()).catch(err=>console.log(err))
    const fruit = await fetch('https://satsin06.github.io/coachappapi/fruits.json').then(res=>res.json()).catch(err=>console.log(err))
    res.status(200).send({
        protein:protein,
        carbs:carbs,
        fats:fat,
        dairy:dairy,
        fruits:fruit
    })
})

foodrouter.get('/all',async(req,res)=>{
    try {
        const protein = await Protein.find({},{_id:0}).select('name type image')
        res.status(200).send({
            protein:protein
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"error occured during fetching",
            error:error
        })
    }

})

foodrouter.post('/addprotein',upload.single('image'),(req,res,next)=>{
    
    const protein = new Protein({
        _id:mongoose.Types.ObjectId(),
        name:req.body.name,
        type:req.body.type,
        // image:"https://mmr-allapi.herokuapp.com/allfoodapi/"+req.file.path
        image:"localhost:5000/allfoodapi/"+req.file.path
    });
    protein.save().then(result=>{
        res.status(201).json({
            message:"Protein added"
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

foodrouter.get("/fooduploads/:str", (req, res) => {
    console.log(req.params.str)
    console.log(req.url)
    res.sendFile(path.join(__dirname, `../fooduploads/${req.params.str}`));
  });

module.exports = foodrouter
