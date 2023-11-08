const mongoose = require("mongoose");



var mesure_schema = new mongoose.Schema({
    tem_sol : {
        type : String,
    },
    tem_externe:{
        type:String,
    },
    hum_sol : {
        type : String,
    },  
    hum_externe : {
        type : String,
    } 
// zoneeeeeee
  
})


const Mesure = mongoose.model("Mesure",mesure_schema);

module.exports = Mesure;