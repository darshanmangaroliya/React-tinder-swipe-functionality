import express from "express";
import mongoose from "mongoose";
import card from "./schema/TinderCd.js";
import cors from "cors"

// app config
const app = express();
const port = process.env.PORT||8001;
const mongodb_url ='your url'

//middleware 
app.use(express.json());
app.use(cors())
// db config
mongoose.connect(mongodb_url,{ useNewUrlParser: true, useUnifiedTopology: true },(req,res)=>{
    console.log("mongo connect")
})

//api end point
app.get('/',(req,res)=>{
    res.status(200).send('hello')
}) 

app.post('/tinder/card',(req,res)=>{
    const dbcard = req.body

    card.create(dbcard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/card',(req,res)=>{

    card.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
//Dluoz0Kn3882MY7t
//Listner
app.listen(5000, ()=>{
    console.log("connect")
})