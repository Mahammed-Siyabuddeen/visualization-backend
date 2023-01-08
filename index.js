import  express from "express";
import mongoose from "mongoose";
import chartSchema from "./chartSchema.js";
// import data from '../visualization/src/Data.json' assert {type:"json"}
import fs from 'fs'
import cors from 'cors'
import env from 'dotenv'

const app=express()
app.use(cors())
env.config()

const Port=process.env.Port||9000
app.listen(Port,()=>console.log('app runnig'))
app.use('/',(req,res)=>{

        chartSchema.find().then((data)=>{
            res.status(200).json(data)
        }).catch((error)=>{
            res.status(404).send("error message ")
        })
})


const jsonData = "JSON.parse(  fs.readFileSync('','utf-8'))"
   
mongoose.set("strictQuery", false);
const uploadData=async()=>{
      chartSchema.create(jsonData,(err,data)=>{
        if(err){
            console.log(err);
        }else{
              console.log("data successfully uploaded");
            }
    
        })
}

// uploadData()
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true
})