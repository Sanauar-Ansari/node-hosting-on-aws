import express from "express";
import dotenv from 'dotenv';
dotenv.config(); // <-- Add this line
const app=express();


app.get("/",(req,res)=>{
    res.send("Welcom to hosting HOME page")
})

app.get("/about",(req,res)=>{
    res.send("Welcom to hosting ABOUT page")
})

app.get("/contact",(req,res)=>{
    res.send("Welcom to hosting CONTACT page")
})


const port=process.env.PORT || 9000;
app.listen(port,(err)=>{
    if(err){
          console.log("There is an error while running server",err)
    }else{
          console.log("Server successfully running on port: ",port)
    }
})