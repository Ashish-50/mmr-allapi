const express = require('express');
const rerouter = express.Router();
const Recipe = require('../model/recipe');
const Nutrition = require('../model/nutrition')

rerouter.get('/getcalorie',async(req,res)=>{
    try {
        
        const calorie = req.query.calorie
        const meal = req.query.meal
        let mealdivide = calorie / meal 
        mealdivide = mealdivide.toFixed(0)
        const breakfast = await Recipe.find({calorie:{$lte:mealdivide}} )
        const nutrition = await Nutrition.find({calorie:{$lte:mealdivide}   })
        console.log(req.query)
        
        if (req.query.meal === '1'){
            res.status(200).json({
                totalcalorie:calorie,
                meal:meal,
                Food:{
                    calorie:mealdivide,
                    foods:breakfast.concat(nutrition)
                }
            });    
        }
        else if (req.body.meal === '2'){
            res.status(200).json({
                totalcalorie:calorie,
                meal:meal,
                "Meal-1":{
                    calorie:mealdivide,
                    foods:breakfast.concat(nutrition)
                },
                "Meal-2":{
                    calorie:mealdivide,
                    foods:breakfast.concat(nutrition)
                }
            })    }
            else if (req.query.meal === '3'){
                res.status(200).json({
                    totalcalorie:calorie,
                    meal:meal,
                    "Meal-1":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-2":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-3":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    }
                });    
            }
            else if (req.query.meal === '4'){
                res.status(200).json({
                    totalcalorie:calorie,
                    meal:meal,
                    "Meal-1":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-2":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-3":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-4":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    }
                });    
            }
            else if (req.query.meal === '5'){
                res.status(200).json({
                    totalcalorie:calorie,
                    meal:meal,
                    "Meal-1":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-2":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-3":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-4":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    },
                    "Meal-5":{
                        calorie:mealdivide,
                        foods:breakfast.concat(nutrition)
                    }
                });    
            }
                    
                } catch (error) {
                    console.log(error)
                    res.json({
                        message:"Something went wrong on the server",
                        error:error.message,
                        error:error
                    })
                }
                })
                
rerouter.get("/",async(req,res)=>{
            try {
                const getrecipe = await Recipe.find({},{_id:0}).select('name protein calorie carbs fats ingredients image')
                     res.status(200).json(getrecipe)
            } catch (error) {
                console.log(error)        
                res.send(error)
                    }
                });
                
                
rerouter.post('/',(req,res)=>{
    try {
        const addrecipe = new Recipe({
            name:req.body.name,
            image:req.body.image,
            protein:req.body.protein,
            calorie:req.body.calorie,
            carbs:req.body.carbs,
            fats:req.body.fats,
            ingredients:req.body.ingredients
        })
        addrecipe.save()
        .then(result=>{
            console.log(result)
            res.status(201).json({
                message:"Recipe created",
                Recipe:result
            });
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:error
        })
    }
});




module.exports = rerouter