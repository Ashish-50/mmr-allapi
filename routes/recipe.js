const express = require('express');
const rerouter = express.Router();
const Recipe = require('../model/recipe');
const Nutrition = require('../model/nutrition')



rerouter.get('/getcalorie/:id',async(req,res)=>{
    try {
        
        async function snackmeal(array,meals){
            let selectedfood = await Nutrition.find({$and:[{name:{$in:array}},{calorie:{$lte:meals}}]})
            return selectedfood
        }

        async function meals(array,meals){
                let selectedfood =  await Recipe.find({$and:[{ingredients:{$in:array}},{calorie:{$lte:meals}}]})
                let selectedfood1 = await Nutrition.find({$and:[{name:{$in:array}},{calorie:{$lte:meals}}]})
                
                let commonselectedfoodarray = selectedfood.concat(selectedfood1)
                return commonselectedfoodarray
            }
        async function breakfast(breakfastfooddata,meal1){
            let sum=0;
            let breakfastarray = []
            for (let i=0;i<breakfastfooddata.length;i++){
                if(sum + breakfastfooddata[i].calorie <= meal1){
                    breakfastarray.push(breakfastfooddata[i])
                    sum = sum + breakfastfooddata[i].calorie
                }
            }
            return breakfastarray
        }
        async function lunch(lunchfooddata,meal2,requiredbreakfastfood){
            let elementchecker = (requiredbreakfastfood,lunchfooddata)=>{
                let flag=0
                for (let i=0;i<requiredbreakfastfood.length;i++){
                    if(lunchfooddata.calorie==requiredbreakfastfood[i].calorie){
                        flag=1
                    }
                }
                if(flag==1){return true}
                else{return false}
            }
            let sum=0;
            let luncharray = []
            for (let i=0;i<lunchfooddata.length;i++){
                if(elementchecker(requiredbreakfastfood,lunchfooddata[i])==true){}else{

                    if(sum + lunchfooddata[i].calorie <= meal2){
                        luncharray.push(lunchfooddata[i])
                        sum = sum + lunchfooddata[i].calorie
                        console.log("it does not found any")
                    }
                }
            }
            return luncharray
        }

        async function dinner(dinnerfooddata,meal3,requiredlunchfood,requiredbreakfastfood){
            let elementchecker = (requiredlunchfood,dinnerfooddata)=>{
                let flag=0
                for (let i=0;i<requiredlunchfood.length;i++){
                    if(dinnerfooddata.calorie==requiredlunchfood[i].calorie){
                        flag=1
                    }
                }
                if(flag==1){return true}
                else{return false}
            }
            
            let sum=0;
            let dinnerarray = []
            for (let i=0;i<dinnerfooddata.length;i++){
                if(elementchecker(requiredlunchfood,dinnerfooddata[i])==true || elementchecker(requiredbreakfastfood,dinnerfooddata[i])==true){}
                else{    
                        if(sum + dinnerfooddata[i].calorie <= meal3){
                            dinnerarray.push(dinnerfooddata[i])
                            sum = sum + dinnerfooddata[i].calorie
                            console.log("it does not found any")
                        }                 
                }
            }
            return dinnerarray
        }
        
        const getmeals = req.params.id
        const calorie = req.query.calorie
        const meal = req.query.meal
        const  array = getmeals.split(',')
        
        console.log(array)
        console.log(calorie,meal)
        if(meal==='1'){
            const mealfood = await meals(array,calorie)
            const requiredfood = await breakfast(mealfood,calorie)
            res.status(200).json({
                totalcalorie:calorie,

                food:requiredfood
            })
        }
        else if(meal==='2'){
            let meal1=(50/100)*calorie
            let meal2=(50/100)*calorie

            //meal1
            const mealfooddata = await meals(array,meal1)
            const meal1food = await breakfast(mealfooddata,meal1)
            
            //meal2
            const mealfooddata2 = await meals(array,meal2)
            const meal2food = await lunch(mealfooddata2,meal2,meal1food)

            res.status(200).json({
                totalcalorie:calorie,
                "Meal-1":{calorie:meal1,foods:meal1food},
                "Meal-2":{calorie:meal2,foods:meal2food}
            })
        }
        
        else if(meal==='3'){
            let meal1 = (20/100)*calorie
            let meal2 = (40/100)*calorie
            let meal3 = (40/100)*calorie
            //breakfast
            const breakfastfooddata = await meals(array,meal1)
            const requiredbreakfastfood = await breakfast(breakfastfooddata,meal1)
            //lunch
            const lunchfooddata = await meals(array,meal2)
            const requiredlunchfood = await lunch(lunchfooddata,meal2,requiredbreakfastfood)
            //dinner
            const dinnerfooddata = await meals(array,meal3)
            const requireddinnerfood = await dinner(dinnerfooddata,meal3,requiredlunchfood,requiredbreakfastfood)

            res.status(200).json({
                totalcalorie:calorie,
                "Meal-1":{calorie:meal1,food:requiredbreakfastfood},
                "Meal-2":{calorie:meal2,food:requiredlunchfood},
                "Meal-3":{calorie:meal3,food:requireddinnerfood}
            })
        }
        else if(meal==='4'){
            let meal1=(30/100)*calorie;
            let meal2=(30/100)*calorie;
            let meal3=(30/100)*calorie;
            let meal4=(10/100)*calorie;
            //breakfast
            const breakfastfooddata = await meals(array,meal1)
            const requiredbreakfastfood = await breakfast(breakfastfooddata,meal1)
            //snack1
            const snack1food = await snackmeal(array,meal4)
            const requiredsnackfood = await breakfast(snack1food,meal4)
            //lunch
            const lunchfooddata = await meals(array,meal2)
            const requiredlunchfood = await lunch(lunchfooddata,meal2,requiredbreakfastfood)
            //dinner
            const dinnerfooddata = await meals(array,meal3)
            const requireddinnerfood = await dinner(dinnerfooddata,meal3,requiredlunchfood,requiredbreakfastfood)

            res.status(200).json({
                totalcalorie:calorie,
                "Meal-1":{calorie:meal1,food:requiredbreakfastfood},
                "Meal-2":{calorie:meal2,food:requiredsnackfood},
                "Meal-3":{calorie:meal3,food:requiredlunchfood},
                "Meal-4":{calorie:meal4,food:requireddinnerfood}
            })

        }
        else if(meal==='5'){
            let meal1=(20/100)*calorie;
            let meal2=(30/100)*calorie;
            let meal3=(30/100)*calorie;
            let meal4=(10/100)*calorie;
            let meal5=(10/100)*calorie;
            //breakfast
            const breakfastfooddata = await meals(array,meal1)
            const requiredbreakfastfood = await breakfast(breakfastfooddata,meal1)
            //snack1
            const snack1food = await snackmeal(array,meal4)
            const requiredsnack1food = await breakfast(snack1food,meal4)
            //snack2
            const snack2food = await snackmeal(array,meal5)
            const requiredsnack2food = await lunch(snack2food,meal5,requiredsnack1food)
            //lunch
            const lunchfooddata = await meals(array,meal2)
            const requiredlunchfood = await lunch(lunchfooddata,meal2,requiredbreakfastfood)
            //dinner
            const dinnerfooddata = await meals(array,meal3)
            const requireddinnerfood = await dinner(dinnerfooddata,meal3,requiredlunchfood,requiredbreakfastfood)

            res.status(200).json({
                totalcalorie:calorie,
                "Meal-1":{calorie:meal1,food:requiredbreakfastfood},
                "Meal-2":{calorie:meal2,food:requiredsnack1food},
                "Meal-3":{calorie:meal3,food:requiredlunchfood},
                "Meal-4":{calorie:meal4,food:requiredsnack2food},
                "Meal-5":{calorie:meal5,food:requireddinnerfood}
            })

        }
        // let mealdivide = calorie / meal 
        // mealdivide = mealdivide.toFixed(0)      

        // const data = await Recipe.find({$and:[{ingredients:{$in:array}},{calorie:{$lte:mealdivide}}]})
        // const data1 = await Nutrition.find({$and:[{name:{$in:array}},{calorie:{$lte:mealdivide}}]})
        // let sum=0
        // let arr=[]
        // let k=0
        // for (i=0;i<data.length;i++){
        // if(sum + data[i].calorie <= mealdivide){
        //     arr.push(data[i])
        //     sum=sum+data[i].calorie
        //     }
        // }
        // console.log(mealdivide)
        // // console.log(sum + "Sum")
        // let sum1 = sum
        // if(sum1<mealdivide){
        //     for(j=0;j<data1.length;j++){
        //         if(sum1 + data1[j].calorie < mealdivide){
        //         arr.push(data1[j])
        //         sum1 = sum1 + data1[j].calorie
        //         }   
        //     }
        // }
        // var calorieleft = mealdivide-sum1
        // // console.log(sum1 + "Sum1")
        

        
        
        // if (req.query.meal === '1'){
            
        //     res.status(200).json({
        //         totalcalorie:calorie,
        //         calorieleft:calorieleft,
        //         meal:meal,
        //         Food:{
        //             calorie:mealdivide,
        //             foods:arr
        //         }
        //     });    
        // }
        // else if (req.query.meal === '2'){
            
        //     res.status(200).json({
        //         totalcalorie:calorie,
        //         calorieleft:calorieleft,
        //         meal:meal,
        //         "Meal-1":{
        //             calorie:mealdivide,
        //             foods:arr
        //         },
        //         "Meal-2":{
        //             calorie:mealdivide,
        //             foods:arr
        //         }
        //     });    
        // }

        

        //     else if (req.query.meal === '3'){
        //         res.status(200).json({
        //             totalcalorie:calorie,
        //             meal:meal,
        //             calorieleft:calorieleft,
        //             "Meal-1":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-2":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-3":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             }
        //         });    
        //     }
        //     else if (req.query.meal === '4'){
        //         res.status(200).json({
        //             totalcalorie:calorie,
        //             meal:meal,
        //             "calorie-left":calorieleft,
        //             "Meal-1":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-2":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-3":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-4":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             }
        //         });    
        //     }
        //     else if (req.query.meal === '5'){
        //         res.status(200).json({
        //             totalcalorie:calorie,
        //             meal:meal,
        //             calorieleft:calorieleft,
        //             "Meal-1":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-2":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-3":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-4":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             },
        //             "Meal-5":{
        //                 calorie:mealdivide,
        //                 foods:arr
        //             }
        //         });    
        //     }
                    
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