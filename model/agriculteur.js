const mongoose = require("mongoose");


var AgriculteurSchema =  mongoose.Schema({

    Phone:{
        type:String,
        //required:true,
        // unique:true
    },
    Pus:{
        type:String,
        //required:true,
        // unique:true
    },
    CodePuk:{
        type:String,
        //required:true,
        // unique:true
    },
    Points:{
        type:Number,
        required:true,
        min:0
        // unique:true
    },
    Password:{
        type:String,
        //required:true,
        //unique:true
    },
    Status_SIM: {
        type: String,
        // enum: ["active", "noActive"],
        // required: true
    },
    //  Status_SIM : 
    //  new mongoose.Schema({ value: { type: String, enum: ['active', 'noActive'] } }),

    Name:String,
    City:String,
    Region:String,
    NbPompe:String,
    NbPuit:String,
    NbVanne:String,
    
})


module.exports  = mongoose.model("Agriculteur",AgriculteurSchema);
