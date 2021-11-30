const express = require('express');
const nutrouter = express.Router();
const Food =require('../model/food');
const Nutrition = require('../model/nutrition');


nutrouter.get('/',async(req,res)=>{
    const getfood = await Food.find({},{_id:0}).populate('nutrition')
    res.json(getfood)
})

nutrouter.post('/',(req,res)=>{
    const addfood = new Food({
        name:req.body.name,
        type:req.body.type,
        image:req.body.image,
    });
    addfood.save()
    .then((result) => {
      console.log(result);
      res.status(201).json({message:"Food Added"})  
    }).catch((err) => {
        console.log(err)
        res.status(500).json({
            error:err,
            message:err.message
        })
    });

});


nutrouter.get('/nutrition',async(req,res)=>{
    const getnut = await Nutrition.find().select('name protein carbs calorie fat')
    res.json(getnut)
})

nutrouter.post('/nutrition',(req,res)=>{
    // const addnut = new Nutrition({
    //     name:req.body.name,
    //     protein:req.body.protein,
    //     carbs:req.body.carbs,
    //     calorie:req.body.calorie,
    //     fat:req.body.fat,
    //     ingredients:req.body.ingredients
    // });
    // console.log(addnut)
    // addnut.save()
    const reqbody = req.body
    let json = {
        name:"Ashish",
        protein:reqbody.protein,
        carbs:reqbody.carbs,
        calorie:reqbody.calorie,
        fat:reqbody.fat,
        ingredients:reqbody.ingredients
    }
    Nutrition.create(json)    
    .then((result) => {
      console.log(result);
      res.status(201).json({message:"Nutrition Added"})  
    }).catch((err) => {
        console.log(err)
        res.status(500).json({
            error:err,
            message:err.message
        })
    });

})



module.exports = nutrouter;