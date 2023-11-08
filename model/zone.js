const mongoose = require("mongoose");

var zone = new mongoose.Schema({    
    name:{
        type:String,
    },
    vanne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vanne'
    } ,  
    mesures: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesure'
    }]
  
})

const Zone = mongoose.model("zone",zone);

module.exports = Zone;