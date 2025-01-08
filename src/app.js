const express = require('express');
require("./config/database")
const connectDB= require("./config/database")
const User = require("./models/user")


const app = express();


app.post("/signUp", async(req,res)=>{
    const userObj={
        firstName:'Harsh',
        lastName:'Sharma',
        email:'Harshsharma@gmail.com',
        password:'Harsh123',
        age:24,
        gender:"male"
    }

    const user = new User(userObj)

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

