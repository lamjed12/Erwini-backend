const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        //mongodb connection string
        const con = await mongoose.connect(
            process.env.mongo_url+process.env.database
        );
        console.log("MongoDB connected : hello ")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB