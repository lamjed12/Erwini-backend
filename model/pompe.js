const mongoose = require("mongoose");



var pompe_schema = new mongoose.Schema({
    active:{
        type:String,
      
    },

    agendas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agenda'
    }],
    user:   {
        type: String,
    },
})


const pompe = mongoose.model("pompe",pompe_schema);

module.exports = pompe;