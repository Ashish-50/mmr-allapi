const express = require('express');
const rerouter = express.Router();
const Recipe = require('../model/recipe');
const Nutrition = require('../model/nutrition')

//here we have created 

rerouter.get('/getcalorie',async(req,res)=>{
    try {
        
        const calorie = req.query.calorie
        const meal = req.query.meal
        const getmeals = req.body.getmeals
        const  array = getmeals.split(',')
        
        
        let mealdivide = calorie / meal 
        mealdivide = mealdivide.toFixed(0)

        const data = await Recipe.find({$and:[{ingredients:{$in:array}},{calorie:{$lte:mealdivide}}]})
        const data1 = await Nutrition.find({$and:[{name:{$in:array}},{calorie:{$lte:mealdivide}}]})
        let sum=0
        let arr=[]
        let k=0
        for (i=0;i<data.length;i++){
        if(sum + data[i].calorie <= mealdivide){
            arr.push(data[i])
            sum=sum+data[i].calorie
            }
        }
        console.log(mealdivide)
        console.log(sum + "Sum")
        let sum1 = sum
        if(sum1<mealdivide){
            for(j=0;j<data1.length;j++){
                if(sum1 + data1[j].calorie < mealdivide){
                arr.push(data1[j])
                sum1 = sum1 + data1[j].calorie
                }   
            }
        }
        var calorieleft = mealdivide-sum1
        console.log(sum1 + "Sum1")
        

        
        
        if (req.query.meal === '1'){
            
            res.status(200).json({
                totalcalorie:calorie,
                calorieleft:calorieleft,
                meal:meal,
                Food:{
                    calorie:mealdivide,
                    foods:arr
                }
            });    
        }
        else if (req.query.meal === '2'){
            
            res.status(200).json({
                totalcalorie:calorie,
                calorieleft:calorieleft,
                meal:meal,
                "Meal-1":{
                    calorie:mealdivide,
                    foods:arr
                },
                "Meal-2":{
                    calorie:mealdivide,
                    foods:arr
                }
            });    
        }

        

            else if (req.query.meal === '3'){
                res.status(200).json({
                    totalcalorie:calorie,
                    meal:meal,
                    calorieleft:calorieleft,
                    "Meal-1":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-2":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-3":{
                        calorie:mealdivide,
                        foods:arr
                    }
                });    
            }
            else if (req.query.meal === '4'){
                res.status(200).json({
                    totalcalorie:calorie,
                    meal:meal,
                    "calorie-left":calorieleft,
                    "Meal-1":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-2":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-3":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-4":{
                        calorie:mealdivide,
                        foods:arr
                    }
                });    
            }
            else if (req.query.meal === '5'){
                res.status(200).json({
                    totalcalorie:calorie,
                    meal:meal,
                    calorieleft:calorieleft,
                    "Meal-1":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-2":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-3":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-4":{
                        calorie:mealdivide,
                        foods:arr
                    },
                    "Meal-5":{
                        calorie:mealdivide,
                        foods:arr
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
  


    rerouter.post('/getingre',(req,res)=>{
        try {
            meals = req.body.meals
            
            
        } catch (error) {
            console.log(error)

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