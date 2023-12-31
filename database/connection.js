const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        //mongodb connection string
        const con = await mongoose.connect(
            "mongodb://localhost:27017/TrainingApp",
            {

                useNewUrlParser: "true",
                useUnifiedTopology: "true"
              
              }
        );
        console.log("MongoDB connected : hello ")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB