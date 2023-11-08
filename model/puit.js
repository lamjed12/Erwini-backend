const mongoose = require("mongoose");

var PuitSchema =  mongoose.Schema({


    Pus:{
        type:String
    },
    Active:{
        type:String
    },
    Connection:{
        type:String
    },
    Agenda:{
        type:String
    },
    Security:String,
    Alert:String

  
    
})


module.exports  = mongoose.model("Puit",PuitSchema);
