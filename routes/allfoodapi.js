const express = require('express');
const foodrouter = express.Router();
const fetch = require('node-fetch')

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



module.exports = foodrouter