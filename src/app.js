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

