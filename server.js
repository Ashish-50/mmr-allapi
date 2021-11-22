const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT||5000;
dotenv.config()
const mongoose = require('mongoose');
const path = require('path')
const exerouter = require('./routes/excersie');
const nutrouter = require('./routes/nutrition');
const agerouter = require('./routes/age');
const foodrouter = require('./routes/allfoodapi')


mongoose.connect(`mongodb+srv://${process.env.databaseusername}:${process.env.databasepassword}@cluster0.1vk7i.mongodb.net/Excersie?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
});

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use('/excersie',exerouter)
app.use('/food',nutrouter)
app.use('/age',agerouter)
app.use('/allfoodapi',foodrouter)


app.listen(port,(req,res)=>{
    console.log(`server started at port ${process.env.PORT}`);
});