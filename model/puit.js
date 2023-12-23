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
    Agenda:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agenda'
    }],
    user:   {
        type: String,
      },
    Security:String,
    Alert:String

  
    
})


module.exports  = mongoose.model("Puit",PuitSchema);
