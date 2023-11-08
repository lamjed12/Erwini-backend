const mongoose = require("mongoose");



var pompe_schema = new mongoose.Schema({
    // date_debut : {
    //     type : String,
    //     // required: true
    // },
    // date_fin:{
    //     type:String,
    //     // required:true,
    //     // unique:true
    // },
    active:{
        type:String,
        // required:true,
        // unique:true
    },
    // zone:{
    //     type:String,
    //     // required:true,
    //     // unique:true
    // },
    agendas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agenda'
    }]
})


const pompe = mongoose.model("pompe",pompe_schema);

module.exports = pompe;