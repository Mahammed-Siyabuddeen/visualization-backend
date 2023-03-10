import  express from "express";
import mongoose from "mongoose";
import chartSchema from "./chartSchema.js";
import cors from 'cors'
import env from 'dotenv'
import bodyParser from "body-parser";

const app=express()
app.use(cors())
env.config()

app.use(bodyParser.json({limit:'50mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))

const Port=process.env.Port||9000
app.listen(Port,()=>console.log(`app runnig ${Port}`))
app.use('/',(req,res)=>{

        chartSchema.find().then((data)=>{
            res.status(200).json(data)
        }).catch((error)=>{
            res.status(404).send("error message ")
        })
})


   
mongoose.set("strictQuery", false);
// const uploadData=async()=>{
//       chartSchema.create("",(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//               console.log("data successfully uploaded");
//             }
    
//         })
// }

// uploadData()
mongoose.connect(process.env.CONNECTIONURL,{
    useNewUrlParser:true
})