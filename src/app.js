const express = require('express');
require("./config/database")
const connectDB= require("./config/database")
const User = require("./models/user")


const app = express();

app.use(express.json())

app.post("/signUp", async(req,res)=>{

    const user = new User(req.body)

    await user.save()

    res.send("user date saved successfully")
})


app.get("/user", async(req,res)=>{
    const userEmail= req.body.email;

    try{
        const user= await User.find({email:userEmail})
       
        if(user.length===0){
            res.status(404).send("user not found")
        }
        else{
            res.send(user)
        }
    }
    catch{
           res.status(400).send("something went wrong")
    }
})



app.get("/feed", async(req,res)=>{
    const userEmail= req.body.email;

    try{
        const user= await User.find({})
       
        if(user.length===0){
            res.status(404).send("users not found")
        }
        else{
            res.send(user)
        }
    }
    catch{
           res.status(400).send("something went wrong")
    }
})


connectDB()
.then(()=>{
    console.log("connected to database")
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch((err)=>{
    console.log('database can not be connected')
})

