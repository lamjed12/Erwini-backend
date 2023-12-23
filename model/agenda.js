const mongoose = require("mongoose");



var agenda_schema = new mongoose.Schema({
    date_debut : {
        type : Date,
        required: true
    },
    date_fin:{
        type:Date,
        required:true,
       // unique:true
    },
    type : {
        type : String,
        // required: true
    },  
  /*  puit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Puit'
    },
    pompe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pompe'
    }
   */
})


const agenda = mongoose.model("agenda",agenda_schema);

module.exports = agenda;