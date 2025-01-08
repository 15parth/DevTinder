const mongoose = require('mongoose');

const connectDB = async()=>{
   await mongoose.connect("mongodb+srv://DevTinder:Keyandpass%40123@devtinder.mpah3.mongodb.net/DevTinder");
}


module.exports= connectDB;
